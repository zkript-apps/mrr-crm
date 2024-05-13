import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { T_Payment } from "../basic-information/hooks/useUpdateCampaignLeadById"
import { format } from 'date-fns';

export default function PaymentHistoryCard({ payment }: { payment: T_Payment }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{payment.method}</CardTitle>
        <CardDescription>{format(new Date(payment.date), "MMMM d, yyyy h:mm a")}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button size="sm">Select</Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant={'secondary'} size="sm">View</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="w-full flex justify-between items-center">
                <AlertDialogTitle>{payment.method}</AlertDialogTitle>
                <AlertDialogTitle className="text-xs text-gray-500">{payment._id}</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                {format(new Date(payment.date), "MMMM d, yyyy h:mm a")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="w-full">
              <div className="flex">
                <div className="flex flex-col w-1/2">
                  <div className="text-sm text-gray-500">
                    Repay Amount
                  </div>
                  <div className="text-lg">
                    ₱{payment.repayAmount}
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="text-sm text-gray-500">
                    Receipt Amount
                  </div>
                  <div className="text-lg">
                    ₱{payment.receiptAmount}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col">
                <div className="text-sm text-gray-500">
                  Remarks
                </div>
                <div className="text-lg">
                  {payment.remarks}
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}
