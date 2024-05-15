export class ApiService {

  private constructHeader(removeContentType = false) {
    const headers = {
      ...(!removeContentType && {
        "Content-Type": "application/json",
      }),
    } as Record<string, any>
    const options = {
      headers,
    }
    return options
  }

  async get<T = any>(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<T | any> {
    const reqParams = new URLSearchParams(params).toString();
    const headers = this.constructHeader();

    const res = fetch(
      `${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        ...headers,
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
    const otherOptions = this.constructHeader(removeContentType)
    const res = fetch(endpoint, {
      method: "POST",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }
  //TODO: fix if body is not FormData use application/json as contentType, right now it is using text/plain;charset=UTF-8
  async patch<T = any>(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<T> {
    const otherOptions = this.constructHeader(removeContentType)
    const res = fetch(endpoint, {
      method: "PATCH",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }

  async delete(endpoint: string, payload?: { [key: string]: string }) {
    const headers = this.constructHeader();

    const res = fetch(`${endpoint}`, {
      method: "DELETE",
      ...headers,
    });
    return (await res).json();
  }
}
