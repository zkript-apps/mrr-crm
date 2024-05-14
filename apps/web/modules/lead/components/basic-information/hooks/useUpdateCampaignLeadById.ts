import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query"

export interface T_Payment {
  method: string;
  date: string;
  receiptAmount: number;
  repayAmount: number;
  fileName: string;
  remarks: string;
  _id?: string;
}

interface Remark {
  comment: string;
  date: string;
  _id?: string;
}

export interface T_Campaign_Lead {
  values: Record<string, string>;
  payments: T_Payment[];
  remarks: Remark[];
}

export async function updateCampaignLeadById(campaignId: string, uniqueId: string, data: T_Campaign_Lead) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_CAMPAIGNS}/${campaignId}/lead/${uniqueId}`, data, true, true)
}

function useUpdateCampaignLeadById(campaignId: string, uniqueId: string) {
  const mutate = useMutation({
    mutationFn: (data: T_Campaign_Lead) => 
      updateCampaignLeadById(campaignId, uniqueId, data)
  })
  return mutate
}

export default useUpdateCampaignLeadById