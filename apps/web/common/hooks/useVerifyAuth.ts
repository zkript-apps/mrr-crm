import { ApiService } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { API_USERS } from "@/lib/api-routes";
import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "../constants";

export async function verifyAuth() {
  const apiService = new ApiService();
  return await apiService.get(`${API_USERS}/verify`);
}
function useVerifyAuth() {
  const query = useQuery({
    queryKey: ["auth"],
    queryFn: () => verifyAuth(),
    gcTime: FIFTEEN_MINUTES,
    staleTime: TWELVE_MINUTES,
  });
  return query;
}
export default useVerifyAuth;
