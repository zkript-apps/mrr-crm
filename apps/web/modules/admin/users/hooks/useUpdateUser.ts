import { ApiService } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { API_USERS } from "@/lib/api-routes";
import { T_User } from "./useAddUser";

export async function updateUser(id: string, data: T_User) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_USERS}/${id}`, data);
}

function useUpdateUser(id: string) {
  const query = useMutation({
    mutationFn: (data: T_User) => updateUser(id, data),
  });
  return query;
}

export default useUpdateUser;
