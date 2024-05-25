import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";

export async function uploadPaymentReceipt(file: FormData) {
  const apiService = new ApiService();
  return await apiService.patch(
    `${API_CAMPAIGNS}/upload-image`,
    file,
    true,
    true,
  );
}

function useUploadPaymentReceipt() {
  const mutate = useMutation({
    mutationFn: (file: FormData) => uploadPaymentReceipt(file),
  });
  return mutate;
}

export default useUploadPaymentReceipt;
