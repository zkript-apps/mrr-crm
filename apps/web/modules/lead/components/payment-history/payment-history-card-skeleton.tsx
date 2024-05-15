import { Skeleton } from "@/components/skeleton";
import React from "react";

function PaymentHistoryCardSkeleton() {
  return (
    <div>
      <div className="border h-full w-full rounded-md shadow-sm p-6">
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-36 mt-4" />
        <div className="flex w-full justify-between mt-5">
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-9 w-16" />
        </div>
      </div>
    </div>
  );
}

export default PaymentHistoryCardSkeleton;
