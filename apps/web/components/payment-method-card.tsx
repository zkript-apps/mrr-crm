"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { T_PaymentMethod } from "@/modules/admin/payment-methods/hooks/useAddPaymentMethod";
import { PaymentMethodDialog } from "./payment-method-dialog";

const handleLocalStorageSubmit = () => {
  const currentTime = new Date();
  const data = {
    campaignId: "663ee9c094a8bb883db97936",
    date: currentTime.toString(),
  };

  localStorage.setItem("campaign", JSON.stringify(data));
  getCampaignLocalStorage();
};

const getCampaignLocalStorage = () => {
  const campaignDataString = localStorage.getItem("campaign");
  if (campaignDataString) {
    const campaignData = JSON.parse(campaignDataString);
    console.log(campaignData);
  }
};

export default function PaymentMethodCard({
  paymentMethod,
}: {
  paymentMethod: T_PaymentMethod;
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
