"use client"

import * as React from "react"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EditCampaignSheet from "@/modules/admin/campaigns/edit-campaign-sheet"
import { T_Campaign } from "@repo/contract";

// EACH CAMPAIGN HAS ITS OWN PATTERN
const campaignTitle = "Lazada PRT";

const handleLocalStorageSubmit = () => {
  const currentTime = new Date();
  const data = {
    campaignId: "663ee9c094a8bb883db97936",
    name: campaignTitle,
    date: currentTime.toString()
  };
  localStorage.setItem("campaign", JSON.stringify(data));
  getCampaignLocalStorage()
};

const getCampaignLocalStorage = () => {
  const campaignDataString = localStorage.getItem("campaign");
  if (campaignDataString) {
    const campaignData = JSON.parse(campaignDataString);
    console.log(campaignData)
  }
};

export default function CampaignCard({ isAdmin, campaign }: { isAdmin?: boolean, campaign: T_Campaign }) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{campaign.title}</CardTitle>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        {isAdmin ?
          <div className="flex w-full">
            <EditCampaignSheet campaign={campaign} />
            <Button
              className="ml-auto"
              variant="outline"
              onClick={() => router.push(`/admin/payment-methods/${campaign._id}`)}
            >Payment Methods</Button>
          </div> :
          <Button onClick={handleLocalStorageSubmit}>Select</Button>}
      </CardFooter>
    </Card>
  )
}
