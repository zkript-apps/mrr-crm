"use client"
import useCampaignDataStore from "@/common/store/useCampaignDataStore";
import { isToday } from "date-fns";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner"

type Props = {
  children: React.ReactNode
}

const CampaignCheckerWrapper = ({ children }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const campaignData = useCampaignDataStore((state) => state.campaignData)
  const setCampaignData = useCampaignDataStore((state) => state.update)

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const lsCampaign = localStorage.getItem("campaign");
      if (lsCampaign) {
        const campaignDataLs = JSON.parse(lsCampaign);
        const isDateToday = isToday(new Date(campaignDataLs.date)) 
        if(isDateToday) {
          setCampaignData({ campaignData: campaignDataLs })
        } else {
          setCampaignData({
            campaignData: {
              campaignId: null,
              name: null,
              date: null,
            }
          })
        }
      } else {
        setCampaignData({
          campaignData: {
            campaignId: null,
            name: null,
            date: null,
          }
        })
      }
    }
  }, [])
  const isLeadPage = pathname.includes("/lead");
  if(campaignData && !campaignData.campaignId && isLeadPage) {
    toast.info("No campaign selected, please select 1")
    router.push(`/campaigns/${params.leadId}`)
  }
  return (
    <>
      {(!campaignData || !campaignData.campaignId) && isLeadPage ? (
        <div className="p-4">Loading...</div>
      ) : children}
    </>
  )
}

export default CampaignCheckerWrapper
