import PaymentHistoryCard from '@/modules/lead/components/payment-history/payment-history-card'
import { useParams } from 'next/navigation'
import React from 'react'
import useGetCampaignLeadById from '../basic-information/hooks/useGetCampaignLeadById'
import PaymentHistoryCardSkeleton from './payment-history-card-skeleton'
import { T_Payment } from '../basic-information/hooks/useUpdateCampaignLeadById'
import { Button } from '@/components/ui/button'
import AddNewPaymentModal from './add-payment-modal'

function PaymentHistory() {
  const params = useParams()
  const leadId = params.leadId as string
  const { data: campaignLead, isLoading: isCampaignLeadLoading } = useGetCampaignLeadById("663ee9c094a8bb883db97936", leadId)
  return (
    <div className='flex flex-col gap-8'>
      <AddNewPaymentModal campaignLead={campaignLead?.item} leadId={leadId}>
        <Button className='w-44'>Add New Payment</Button>
      </AddNewPaymentModal>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
        {
          campaignLead?.item ? 
            isCampaignLeadLoading ? 
              <div>
                <PaymentHistoryCardSkeleton />
                <PaymentHistoryCardSkeleton />
                <PaymentHistoryCardSkeleton />
              </div>
            : 
            campaignLead.item.payments.map((payment: T_Payment) => (
              <div>
                <PaymentHistoryCard key={payment._id} payment={payment} />
              </div>
            ))
          : 
          <div className='text-gray-500'>No payment history record</div>
        }
      </div>
    </div>
    
  )
}

export default PaymentHistory