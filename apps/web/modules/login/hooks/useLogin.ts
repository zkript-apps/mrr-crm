import { ApiService } from "@/lib/api";
import { API_USERS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";

export async function login(props: { username: string, password: string }) {
  const apiService = new ApiService();
  return await apiService.post(`${API_USERS}/auth`, props);
}

function useLogin() {
  const query = useMutation({
    mutationFn: (props: { username: string, password: string }) => login(props),
  });
  return query;
}

export default useLogin;
