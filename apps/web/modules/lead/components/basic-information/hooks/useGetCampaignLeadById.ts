import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useQuery } from "@tanstack/react-query";

export async function getCampaignLeadById(
  campaignId: string,
  uniqueId: string,
) {
  const apiService = new ApiService();
  return await apiService.get(
    `${API_CAMPAIGNS}/${campaignId}/lead/${uniqueId}`,
  );
}

function useGetCampaignLeadById(campaignId: string, uniqueId: string) {
  const query = useQuery({
    queryKey: ["campaign-lead", campaignId, uniqueId],
    queryFn: () => getCampaignLeadById(campaignId, uniqueId),
    enabled: !!campaignId || !!uniqueId,
  });
  return query;
}

export default useGetCampaignLeadById;
