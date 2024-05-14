import { ApiService } from "@/lib/api";
import { useQuery } from "@tanstack/react-query"
import { API_PAYMENT_METHODS } from "@/lib/api-routes"

export async function getPaymentMethodsByCampaign(campaignId: string) {
  const apiService = new ApiService()
  return await apiService.get(`${API_PAYMENT_METHODS}/${campaignId}/campaign`)
}

function useGetPaymentMethodsByCampaign(campaignId: string) {
  const query = useQuery({
    queryKey: ["payment-methods"],
    queryFn: () => getPaymentMethodsByCampaign(campaignId),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetPaymentMethodsByCampaign
