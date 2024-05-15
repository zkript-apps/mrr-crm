"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicInformation from './components/basic-information'
import PaymentMethods from './components/payment-methods'
import useGetCampaignTitleAndDescription from './components/basic-information/hooks/useGetCampaignTitleAndDescription'
import { Skeleton } from '@/components/skeleton'
import PaymentHistory from './components/payment-history'
import useCampaignDataStore from '@/common/store/useCampaignDataStore'

const Lead = () => {
  const campaignId = useCampaignDataStore((state) => state.campaignData?.campaignId)
  const { data: titleAndDescription, isLoading: isTitleAndDescriptionLoading } = useGetCampaignTitleAndDescription(campaignId as string)
  return (
    <div className='flex flex-col gap-8 p-12'>
      <div className='flex flex-col gap-12'>
        {
          titleAndDescription?.item ?           
          !isTitleAndDescriptionLoading ? 
          <div>
            <div className='text-xl font-semibold'>
              {titleAndDescription?.item.title ? titleAndDescription?.item.title : "No title"}
            </div>
            <div className='text-gray-500'>
              {titleAndDescription?.item.description ? titleAndDescription?.item.description : "No description"}
            </div>
          </div> : 
          <div className='flex flex-col gap-2'>
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-4 w-64" />
          </div> :
          <div>
            <div className='text-xl font-semibold'>
              No title
            </div>
            <div className='text-gray-500'>
              No description
            </div>
          </div>
        }
      </div>
      <div>
        {/* <Tabs tabs={tabs} /> */}
        <Tabs defaultValue="basicInformation" className="w-full">
          <TabsList>
            <TabsTrigger value="basicInformation">Basic Information</TabsTrigger>
            <TabsTrigger value="paymentHistory">Payment History</TabsTrigger>
            <TabsTrigger value="paymentMethods">Payment Methods</TabsTrigger>
          </TabsList>
          <TabsContent className='mt-8' value="basicInformation">
            <BasicInformation />
          </TabsContent>
          <TabsContent className='mt-8' value="paymentHistory">
            <PaymentHistory />
          </TabsContent>
          <TabsContent className='mt-8' value="paymentMethods">
            <PaymentMethods />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    
  )
}

export default Lead