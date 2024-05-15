import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useQuery } from "@tanstack/react-query";

export async function getCampaignTitleAndDescription(campaignId: string) {
  const apiService = new ApiService();
  return await apiService.get(
    `${API_CAMPAIGNS}/${campaignId}/title-description`,
  );
}

function useGetCampaignTitleAndDescription(campaignId: string) {
  const query = useQuery({
    queryKey: ["campaign", "title-description", campaignId],
    queryFn: () => getCampaignTitleAndDescription(campaignId as string),
    enabled: !!campaignId,
  });

  return query;
}

export default useGetCampaignTitleAndDescription;
