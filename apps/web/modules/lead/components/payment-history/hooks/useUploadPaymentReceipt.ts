import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query"


export interface T_Campaign_Lead_Image_File_Name {
  image: FormData;
}

export async function uploadPaymentReceipt(campaignId: string, uniqueId: string, data: T_Campaign_Lead_Image_File_Name) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_CAMPAIGNS}/${campaignId}/lead/${uniqueId}/image`, data)
}

function useUploadPaymentReceipt(campaignId: string, uniqueId: string) {
  const mutate = useMutation({
    mutationFn: (data: T_Campaign_Lead_Image_File_Name) => 
      uploadPaymentReceipt(campaignId, uniqueId, data)
  })
  return mutate
}

export default useUploadPaymentReceipt