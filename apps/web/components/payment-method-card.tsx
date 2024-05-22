"use client";

import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentMethodDialog } from "./payment-method-dialog";

export default function PaymentMethodCard({
  paymentMethod,
}: {
  paymentMethod: any;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{paymentMethod.title}</CardTitle>
        <CardDescription>Steps: {paymentMethod.steps.length}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <PaymentMethodDialog paymentMethod={paymentMethod} />
      </CardFooter>
    </Card>
  );
}
