import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export async function getCampaignTitleAndDescription(campaignId: string) {
  const apiService = new ApiService();
  return await apiService.get(`${API_CAMPAIGNS}/${campaignId}/title-description`)
}

function useGetCampaignTitleAndDescription() {
  const [campaignId, setCampaignId] = useState<string | null>(null)

  useEffect(() => {
    const lsCampaign = localStorage.getItem("campaign");
    if (lsCampaign) {
      const campaignData = JSON.parse(lsCampaign);
      setCampaignId(campaignData.campaignId)
    }
  }, [])

  const query = useQuery({
    queryKey: ['campaign', 'title-description', campaignId],
    queryFn: () => getCampaignTitleAndDescription(campaignId as string),
    enabled: !!campaignId
  })
  
  return query
}

export default useGetCampaignTitleAndDescription