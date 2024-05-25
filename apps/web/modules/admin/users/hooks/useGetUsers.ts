import { ApiService } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { API_USERS } from "@/lib/api-routes";

export async function getUsers() {
  const apiService = new ApiService();
  return await apiService.get(`${API_USERS}`);
}

function useGetUsers() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
  });
  return query;
}
export default useGetUsers;
