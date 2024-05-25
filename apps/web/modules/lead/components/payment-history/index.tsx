import PaymentHistoryCard from "@/modules/lead/components/payment-history/payment-history-card";
import { useParams } from "next/navigation";
import React from "react";
import useGetCampaignLeadById from "../basic-information/hooks/useGetCampaignLeadById";
import PaymentHistoryCardSkeleton from "./payment-history-card-skeleton";
import { T_Payment } from "../basic-information/hooks/useUpdateCampaignLeadById";
import { Button } from "@/components/ui/button";
import AddNewPaymentModal from "./add-payment-modal";
import useAuthStore from "@/common/store/useAuthStore";
import { T_Campaign, T_Payments } from "@repo/contract";

function PaymentHistory() {
  const params = useParams();
  const leadId = params.leadId as string;
  const auth = useAuthStore(
    (state) => state,
  );
  const { data: campaignLead, isLoading: isCampaignLeadLoading } =
    useGetCampaignLeadById((auth.campaignId as T_Campaign)._id as string, leadId);
  return (
    <div className="flex flex-col gap-6">
      {campaignLead.item && (
        <AddNewPaymentModal campaignLead={campaignLead?.item} leadId={leadId}>
          <Button className="w-44">Add New Payment</Button>
        </AddNewPaymentModal>
      )}

      {campaignLead?.item ? (
        isCampaignLeadLoading ? (
          <div>
            <PaymentHistoryCardSkeleton />
            <PaymentHistoryCardSkeleton />
            <PaymentHistoryCardSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {campaignLead.item.payments.sort((a: T_Payments, b: T_Payments) => {
              const dateA = new Date(a.date).getTime();
              const dateB = new Date(b.date).getTime();
              return dateB - dateA;
            }).map((payment: T_Payment) => (
              <div>
                <PaymentHistoryCard key={payment._id} payment={payment} />
              </div>
            ))}
            {!campaignLead.item.payments || campaignLead.item.payments.length === 0 ? (
              <div className="text-gray-500">No payment history found</div>
            ) : null}
          </div>
        )
      ) : (
        <div className="text-gray-500">There are no lead associated with this id</div>
      )}
    </div>
  );
}

export default PaymentHistory;
