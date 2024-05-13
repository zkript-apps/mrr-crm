import React from 'react'
import BasicInformationFields from './basic-information-fields'
import Remarks from './remarks'
import useGetCampaignLeadById from './hooks/useGetCampaignLeadById'
import { useParams } from 'next/navigation'

function BasicInformation() {
  const params = useParams()
  const leadId = params.leadId as string
  const { data: campaignLead, isLoading: isCampaignLeadLoading } = useGetCampaignLeadById("663ee9c094a8bb883db97936", leadId)
  return (
    <div className='flex gap-44'>
      <div className='w-1/2'>
        <BasicInformationFields fields={campaignLead?.item.values} isLoading={isCampaignLeadLoading} />
      </div>
      <div className='w-1/2'>
        <Remarks campaignLead={campaignLead?.item} isLoading={isCampaignLeadLoading} />
      </div>
    </div>
  )
}

export default BasicInformation