"use client";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditCampaignSheet from "@/modules/admin/campaigns/edit-campaign-sheet";
import { T_Campaign } from "@repo/contract";

export default function CampaignCard({
  campaign,
}: {
  campaign: T_Campaign;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{campaign.title}</CardTitle>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <EditCampaignSheet campaign={campaign} />
      </CardFooter>
    </Card>
  );
}
