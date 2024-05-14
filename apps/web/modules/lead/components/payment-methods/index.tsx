import React, { useState } from 'react'
import { SideNav } from './side-nav'
import useGetPaymentMethods from '../payment-history/hooks/useGetPaymentMethods';
import { Skeleton } from '@/components/skeleton';


interface PaymentMethodStep {
  step: number,
  instruction: string,
}
export interface PaymentMethod {
  title: string,
  description: string,
  steps: PaymentMethodStep[],
  _id: string
}

function PaymentMethods() {
  const { data: paymentMethods, isLoading: isGetPaymentMethodsLoading } = useGetPaymentMethods()
  const [selectedItem, setSelectedItem] = useState(paymentMethods?.items[0]?._id || '');

  const getSteps = (id: string) => {
    const method = paymentMethods?.items?.find((method: PaymentMethod) => method._id === id);
    return(
      <div className='flex flex-col gap-12'>
        {
          isGetPaymentMethodsLoading ? 
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-6'>
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-12 w-full" />
            </div>
            <div className='flex flex-col gap-6'>
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-12 w-full" />
            </div>
            <div className='flex flex-col gap-6'>
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
          :
          method?.steps?.map((step: PaymentMethodStep, index: number) => (
            <div key={index} className='flex flex-col gap-6'>
              <div className='font-medium'>
                Step {step.step}
              </div>
              <div className='text-gray-500'>
                {step.instruction}
              </div>
            </div>
          ))
        }
      </div>
    )
  };
  
  return (
    <div className='flex gap-44'>
      <div className='w-1/6'>
        {
          isGetPaymentMethodsLoading ? 
          <div
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </nav>
          </div>
          :
          <SideNav
            links={paymentMethods?.items}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        }
        
      </div>
      <div className='w-5/6'>
        {getSteps(selectedItem)}
      </div>
    </div>
  )
}

export default PaymentMethods
