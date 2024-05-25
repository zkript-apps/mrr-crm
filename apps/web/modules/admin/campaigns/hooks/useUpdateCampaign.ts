import { ApiService } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { API_CAMPAIGNS } from "@/lib/api-routes";

export async function updateCampaign(id: string, data: any) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_CAMPAIGNS}/update/${id}`, data);
}

function useUpdateCampaign(id: string) {
  const query = useMutation({
    mutationFn: (data: any) => updateCampaign(id, data),
  });
  return query;
}

export default useUpdateCampaign;
