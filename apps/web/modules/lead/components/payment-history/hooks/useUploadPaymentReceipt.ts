import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";

export async function uploadPaymentReceipt(campaignId: string, uniqueId: string, file: FormData) {
  const apiService = new ApiService();
  return await apiService.patch(`${API_CAMPAIGNS}/${campaignId}/lead/${uniqueId}/image`, file, true, true);
}

function useUploadPaymentReceipt(campaignId: string, uniqueId: string) {
  const mutate = useMutation({
    mutationFn: (file: FormData) => uploadPaymentReceipt(campaignId, uniqueId, file)
  });
  return mutate;
}

export default useUploadPaymentReceipt;
