import Cookies from "js-cookie";

enum EContentType {
  JSON = "application/json",
  formData = "multipart/form-data",
}

export class ApiService {
  private isAuthRequired: boolean = true;
  private constructHeader(isFormData = false, removeContentType = false) {
    const accessToken = Cookies.get("accessToken");

    const res = {
      ...(!removeContentType && {
        "Content-Type": isFormData ? EContentType.formData : "application/json",
      }),
      ...(accessToken && this.isAuthRequired
        ? { Authorization: `Bearer ${accessToken}` }
        : {}),
    } as Record<string, any>;

    return res;
  }

  async get<T = any>(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<T | any> {
    const reqParams = new URLSearchParams(params).toString();
    const header = this.constructHeader();

    const res = fetch(
      `${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        headers: header,
        ...(signal ? { signal } : {}),
      }
    );

    return (await res).json();
  }

  async post<T = any>(
    endpoint: string, 
    body: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<T> {
    const otherOptions = this.constructHeader(removeContentType);
    const res = fetch(`${endpoint}`, {
      method: "POST",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions
    });
    return (await res).json();
  }

  //TODO: fix if body is not FormData use application/json as contentType, right now it is using text/plain;charset=UTF-8
  async patch(
    endpoint: string, 
    body: any,
    isFormData?: boolean,
    removeContentType?: boolean
  ) {
    const otherOptions = this.constructHeader(isFormData, removeContentType);
    const res = await fetch(endpoint, {
      method: "PATCH",
      body: !isFormData ? JSON.stringify(body) : body,
      ...otherOptions
    });
    return res.json();
  }

  async delete(endpoint: string, payload?: { [key: string]: string }) {
    const header = this.constructHeader();

    const res = fetch(`${endpoint}`, {
      method: "DELETE",
      headers: header,
    });
    return (await res).json();
  }
}
