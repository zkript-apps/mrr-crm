import { Skeleton } from '@/components/skeleton'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { format } from 'date-fns';
import { useForm } from 'react-hook-form'
import { T_Campaign_Lead } from './hooks/useUpdateCampaignLeadById'

interface Remarks {
  comment: string,
  date: string,
  _id: string
}

interface T_Remark {
  remark: string
}

function Remarks({ campaignLead, isLoading }: { campaignLead: T_Campaign_Lead, isLoading: boolean }) {
  
  const { register, handleSubmit } = useForm<T_Remark>()

  const onSubmit = (data: any) => {
    const formattedData ={
      ...campaignLead,
      remarks: [
        ...campaignLead.remarks
      ]
    }
    console.log(campaignLead)
  }

  return (
    <div className='w-full flex flex-col gap-12'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'>
          <label className='text-sm'>
            Remarks
          </label>
          <Textarea {...register("remark", { required: true })}  placeholder='Enter your remarks here' className='h-32' />
          <div className='flex justify-end'>
            <Button className='w-1/6'>Add</Button>
          </div>
        </div>
      </form>
      <div className='flex flex-col gap-4 max-h-96 overflow-auto'>
        { isLoading ? 
        <div>
          <div className='p-4'>
            <div className='flex flex-col gap-2'>
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <Separator className='h-0.5' />
          <div className='p-4'>
            <div className='flex flex-col gap-2'>
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <Separator className='h-0.5' />
          <div className='p-4'>
            <div className='flex flex-col gap-2'>
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
        </div>
        : 
        <>
          {campaignLead.remarks.map((remark, index) => (
            <div key={index}>
              <div className='p-4'>
                <div className='text-xs text-gray-500'>
                  {format(new Date(remark.date), "MMMM d, yyyy h:mm a")}
                </div>
                <div>
                  {remark.comment}
                </div>
              </div>
              {/* Render Separator only if it's not the last item */}
              {index !== campaignLead.remarks.length - 1 && <Separator className='h-0.5' />}
            </div>
          ))}
        </>
        }
      </div>
    </div>
  )
}

export default Remarks