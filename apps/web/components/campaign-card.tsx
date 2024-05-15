"use client";
import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditCampaignSheet from "@/modules/admin/campaigns/edit-campaign-sheet";
import { T_Campaign } from "@repo/contract";
import { toast } from "sonner";
import useCampaignDataStore from "@/common/store/useCampaignDataStore";
import { useQueryClient } from "@tanstack/react-query";

export default function CampaignCard({
  isAdmin,
  campaign,
}: {
  isAdmin?: boolean;
  campaign: T_Campaign;
}) {
  const router = useRouter();
  const params = useParams();
  const queryClient = useQueryClient();
  const setCampaignData = useCampaignDataStore((state) => state.update);
  const handleLocalStorageSubmit = () => {
    const currentTime = new Date();
    const data = {
      campaignId: campaign._id as string,
      name: campaign.title,
      date: currentTime.toString(),
    };
    localStorage.setItem("campaign", JSON.stringify(data));
    toast.success("Campaign was set");
    setCampaignData({
      campaignData: data,
    });
    queryClient.invalidateQueries({
      queryKey: ["campaign", "title-description"],
    });
    queryClient.invalidateQueries({
      queryKey: ["campaign-lead"],
    });
    if (params && params.leadId) {
      router.push(`/lead/${params.leadId}`);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{campaign.title}</CardTitle>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        {isAdmin ? (
          <div className="flex w-full">
            <EditCampaignSheet campaign={campaign} />
            <Button
              className="ml-auto"
              variant="outline"
              onClick={() =>
                router.push(`/admin/payment-methods/${campaign._id}`)
              }
            >
              Payment Methods
            </Button>
          </div>
        ) : (
          <Button onClick={handleLocalStorageSubmit}>Select</Button>
        )}
      </CardFooter>
    </Card>
  );
}
