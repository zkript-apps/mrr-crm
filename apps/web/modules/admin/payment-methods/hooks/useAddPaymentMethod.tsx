import { ApiService } from "@/lib/api";
import { API_PAYMENT_METHODS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";
import { ReactNode } from "react";

type Step = {
  step?: ReactNode;
  _id?: string;
  instruction: string;
};

export type T_PaymentMethod = {
  campaignId: string;
  title: string,
  steps: Step[];
};

export async function addPaymentMethod(props: T_PaymentMethod) {
  const apiService = new ApiService();
  return await apiService.post(API_PAYMENT_METHODS, props);
}

function useAddPaymentMethod() {
  const query = useMutation({
    mutationFn: (props: T_PaymentMethod) => addPaymentMethod(props),
  });
  return query;
}

export default useAddPaymentMethod;
