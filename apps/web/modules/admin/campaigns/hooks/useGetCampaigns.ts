import { ApiService } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { API_CAMPAIGNS } from "@/lib/api-routes";

export async function getAllRules() {
  const apiService = new ApiService();
  return await apiService.get(`${API_CAMPAIGNS}`);
}

function useGetCampaigns() {
  const query = useQuery({
    queryKey: ["campaigns"],
    queryFn: () => getAllRules(),
    refetchOnWindowFocus: false,
  });
  return query;
}
export default useGetCampaigns;
