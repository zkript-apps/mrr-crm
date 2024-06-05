import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { T_Payment } from "../basic-information/hooks/useUpdateCampaignLeadById";
import { format } from "date-fns";
import Link from "next/link";

export default function PaymentHistoryCard({
  payment,
}: {
  payment: T_Payment;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{payment.method}</CardTitle>
        <CardDescription>
          <div>{format(new Date(payment.date), "MMMM d, yyyy h:mm a")}</div>
          <div>Assisted by {payment.agentFirstName ? payment.agentFirstName : "---"} {payment.agentLastName ? payment.agentLastName : "---"}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button size="sm">View</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="w-full flex justify-between items-center">
                <AlertDialogTitle>{payment.method}</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                {format(new Date(payment.date), "MMMM d, yyyy h:mm a")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="w-full">
              <div className="flex">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm text-gray-500">Repay Amount</label>
                  <div className="text-lg">₱{payment.repayAmount}</div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="text-sm text-gray-500">Receipt Amount</div>
                  <div className="text-lg">₱{payment.receiptAmount}</div>
                </div>
              </div>
              <div className="flex">
                <div className="mt-4 flex flex-col w-1/2">
                  <div className="text-sm text-gray-500">Remarks</div>
                  <div className="text-lg">{payment.remarks ? payment.remarks : "---"}</div>
                </div>
                <div className="mt-4 flex flex-col w-1/2">
                  <div className="text-sm text-gray-500">Image</div>
                  <div className="text-lg">
                    {payment.fileName ? (
                      <Link
                        href={`${process.env.WEB_URL}/files/${payment.fileName}`}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        View file
                      </Link>
                    ) : (
                      <p className="text-gray-400">No image</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm text-gray-500">Agent</label>
                  <div className="text-lg">{payment.agentFirstName ? payment.agentFirstName : "---"} {payment.agentLastName ? payment.agentLastName : "---"}</div>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
