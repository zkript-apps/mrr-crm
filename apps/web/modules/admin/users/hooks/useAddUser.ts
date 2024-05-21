import { ApiService } from "@/lib/api";
import { API_USERS } from "@/lib/api-routes";
import { T_Campaign } from "@repo/contract";
import { useMutation } from "@tanstack/react-query";

export type T_User = {
  _id?: string
  firstName: string
  lastName: string
  username: string
  password?: string
  role: string
  campaignId: string | T_Campaign
}

export async function addUser(props: T_User) {
  const apiService = new ApiService();
  return await apiService.post(API_USERS, props);
}

function useAddUser() {
  const query = useMutation({
    mutationFn: (props: T_User) => addUser(props),
  });
  return query;
}

export default useAddUser;
