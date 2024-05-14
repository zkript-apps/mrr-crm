import { ApiService } from "@/common/service/api";
import { useMutation } from "@tanstack/react-query";

type Step = {
  instruction: string;
};

export type T_PaymentMethod = {
  campaignId: string;
  steps: Step[];
};

export async function addPaymentMethod(props: T_PaymentMethod) {
  console.log(props)
  const apiService = new ApiService();
  return await apiService.post("/api/payment-methods", props);
}

function useAddPaymentMethod() {
  const query = useMutation({
    mutationFn: (props: T_PaymentMethod) => addPaymentMethod(props),
  });
  return query;
}

export default useAddPaymentMethod;
