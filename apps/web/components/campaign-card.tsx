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
// EACH CAMPAIGN HAS ITS OWN PATTERN
const campaignTitle = "Lazada PRT";

const handleLocalStorageSubmit = () => {
  const currentTime = new Date();
  const data = {
    name: campaignTitle,
    date: currentTime.toString()
  };
  localStorage.setItem("campaign", JSON.stringify(data));
  getCampaignLocalStorage()
};

const getCampaignLocalStorage = () => {
  const campaignDataString = localStorage.getItem("campaign");
  if(campaignDataString){
    const campaignData = JSON.parse(campaignDataString);
    console.log(campaignData)
  }
};

export default function CampaignCard({ isAdmin }: { isAdmin?: boolean }) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{campaignTitle}</CardTitle>
        <CardDescription>Some description for the campaign.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        {isAdmin ? 
        <div className="flex w-full">
        <EditCampaignSheet/>
        <Button 
        className="ml-auto" 
        variant="outline"
        onClick={() => router.push("/admin/payment-methods/campaignId")}
        >Payment Methods</Button>
        </div>:
        <Button onClick={handleLocalStorageSubmit}>Select</Button>}
       
      </CardFooter>
    </Card>
  )
}
