import { ApiService } from "@/lib/api";
import { API_PAYMENT_METHODS } from "@/lib/api-routes";
import { useQuery } from "@tanstack/react-query";

export async function getPaymentMethods() {
  const apiService = new ApiService();
  return await apiService.get(`${API_PAYMENT_METHODS}`);
}

function useGetPaymentMethods() {
  const query = useQuery({
    queryKey: ["payment-methods"],
    queryFn: () => getPaymentMethods(),
  });
  return query;
}

export default useGetPaymentMethods;
