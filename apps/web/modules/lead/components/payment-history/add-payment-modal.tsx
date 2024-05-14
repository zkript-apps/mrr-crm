import React, { ReactNode, useRef, useState } from 'react'
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
 } from '@/components/ui/select'
import useGetPaymentMethods from './hooks/useGetPaymentMethods'
import { Button } from '@/components/ui/button'
import useUpdateCampaignLeadById, { T_Campaign_Lead } from '../basic-information/hooks/useUpdateCampaignLeadById'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Upload } from 'lucide-react'
import UploadImage from './upload-image'

function AddNewPaymentModal({ children, campaignLead, leadId }: { children: ReactNode, campaignLead: T_Campaign_Lead, leadId: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const queryClient = useQueryClient();
  const { data: paymentMethods, isLoading: isGetPaymentMethodsLoading } = useGetPaymentMethods()
  const { mutate, isPending: isUpdateCampaignLeadLoading } = useUpdateCampaignLeadById("663ee9c094a8bb883db97936", leadId)

  const [formData, setFormData] = useState({
    method: '',
    repayAmount: 0,
    receiptAmount: 0,
    remarks: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      method: value
    }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formattedData = {
      ...campaignLead,
      payments: [
        ...campaignLead.payments,
        {
          ...formData,
          repayAmount: Number(formData.repayAmount),
          receiptAmount: Number(formData.receiptAmount),
          fileName: "sample.jpg",
          date: new Date().toISOString()
        }
      ]
    }
    mutate(formattedData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['campaign-lead'],
          refetchType: 'active',
        });
        toast.success("Remarks saved")
      },
      onError() {
        toast.error("An unexpected error has occurred, try again")
      }
    })
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div>{children}</div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add New Payment</AlertDialogTitle>
          </AlertDialogHeader>
          <form ref={formRef} onSubmit={onSubmit} className="w-full">
            <div className="flex flex-col gap-1 w-1/2">
              <label className="text-sm text-gray-500">
                Payment Method
              </label>
              <div>
                <Select disabled={isUpdateCampaignLeadLoading || isGetPaymentMethodsLoading} value={formData.method} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {paymentMethods?.items?.map((method: { title: string }) => (
                        <SelectItem value={method.title}>{method.title}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm text-gray-500">
                  Repay Amount
                </label>
                <div>
                  <Input disabled={isUpdateCampaignLeadLoading} type='number' name="repayAmount" value={formData.repayAmount} onChange={handleChange} />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm text-gray-500">
                  Receipt Amount
                </label>
                <div>
                  <Input disabled={isUpdateCampaignLeadLoading} type='number' name="receiptAmount" value={formData.receiptAmount} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-1 flex-col">
              <label className="text-sm text-gray-500">
                Remarks
              </label>
              <div>
                <Textarea disabled={isUpdateCampaignLeadLoading} name="remarks" value={formData.remarks} onChange={handleChange} />
              </div>
            </div>

            <UploadImage isLoading={isUpdateCampaignLeadLoading} leadId={leadId} />
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel disabled={isUpdateCampaignLeadLoading}>Cancel</AlertDialogCancel>
              <Button disabled={isUpdateCampaignLeadLoading} type='submit'>Save</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default AddNewPaymentModal
