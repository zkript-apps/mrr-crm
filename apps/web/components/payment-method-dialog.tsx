import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { T_PaymentMethod } from "@/modules/admin/payment-methods/hooks/useAddPaymentMethod";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

export function PaymentMethodDialog({
  paymentMethod,
}: {
  paymentMethod: T_PaymentMethod;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">View</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{paymentMethod.title}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-5">
              {paymentMethod.steps.map((step) => (
                <div key={step._id}>
                  <div className="font-bold mt-2">Step {step.step}</div>
                  <div>{step.instruction}</div>
                </div>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
