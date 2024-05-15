"use client"
import React from 'react';
import { Separator } from "@/components/ui/separator";
import AddPaymentMethodSheet from './add-method-sheet';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import useGetCampaignTitleAndDescription from '@/modules/lead/components/basic-information/hooks/useGetCampaignTitleAndDescription';
import useGetPaymentMethodsByCampaign from './hooks/useGetPaymentMethodsByCampaign';
import PaymentMethodCard from '@/components/payment-method-card';
import useCampaignDataStore from '@/common/store/useCampaignDataStore';

const AdminPaymentMethods = () => {
  const router = useRouter();
  const { data: titleAndDescription, isLoading: isTitleAndDescriptionLoading } = useGetCampaignTitleAndDescription()
  const campaignId = useCampaignDataStore((state) => state.campaignData?.campaignId);
  const { data } = useGetPaymentMethodsByCampaign(campaignId as string);

  return (
    <div className="space-y-6 p-10 pb-16">
       <div className="space-y-0.5 flex w-full">
        
       {
          titleAndDescription?.item ?           
          !isTitleAndDescriptionLoading ? 
        <div>
           <Button
        onClick={() => router.push("/admin/campaigns")}
        className='mb-4'
        variant="outline"
        size="sm">
        Back to Campaigns
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Payment Methods
       ( {titleAndDescription?.item.title ? titleAndDescription?.item.title : "No title"} )
        </h2>
        <p className="text-muted-foreground">
          View payment methods of a campaign.
        </p>
        </div> : null : null
        }
        <div className='flex items-center flex-grow justify-end'>
        <AddPaymentMethodSheet/> 
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {data?.items?.map((item: any) => {
          return (
            <PaymentMethodCard paymentMethod={item} />
          );
        })}
      </div>
    </div>
  )
}

export default AdminPaymentMethods;
