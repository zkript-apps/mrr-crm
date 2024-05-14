import Cookies from "js-cookie";

enum EContentType {
  JSON = "application/json",
  formData = "multipart/form-data",
}

export class ApiService {
  private isAuthRequired: boolean = true;
  private url = 'http://localhost:9000'
  private constructHeader(isFormData = false, removeContentType = false) {
    const accessToken = Cookies.get("accessToken");

    const res = {
      ...(!removeContentType && {
        "Content-Type": isFormData ? EContentType.formData : EContentType.JSON,
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
      `${this.url}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        headers: header,
        ...(signal ? { signal } : {}),
      }
    );

    return (await res).json();
  }

  async post<T = any>(endpoint: string, body: any): Promise<T> {
    const header = this.constructHeader();
    const res = fetch(`${this.url}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: header,
    });
    return (await res).json();
  }

  async patch(endpoint: string, body: any) {
    const header = this.constructHeader();

    const res = fetch(`${this.url}${endpoint}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: header,
    });
    return (await res).json();
  }

  async delete(endpoint: string, payload?: { [key: string]: string }) {
    const header = this.constructHeader();

    const res = fetch(`${this.url}${endpoint}`, {
      method: "DELETE",
      headers: header,
    });
    return (await res).json();
  }
}
