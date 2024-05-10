"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicInformation from './components/basic-information'


const agency = {
  firstName: "John",
  lastName: "Madrigal",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const Lead = () => {
  return (
    <div className='flex flex-col gap-8 p-12'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col gap-12'>
          <div>
            <div className='text-xl font-semibold'>
              {agency.firstName} {agency.lastName}
            </div>
            <div className='text-gray-500'>
              {agency.description}
            </div>
          </div>
        </div>
        <div>
          <Button>Payment Method</Button>
        </div>
      </div>
      <div>
        {/* <Tabs tabs={tabs} /> */}
        <Tabs defaultValue="basicInformation" className="w-full">
          <TabsList>
            <TabsTrigger value="basicInformation">Basic Information</TabsTrigger>
            <TabsTrigger value="paymentHistory">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent className='mt-8' value="basicInformation">
            <BasicInformation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    
  )
}

export default Lead