"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import CampaignCard from "@/components/campaign-card";
import useGetCampaigns from "../admin/campaigns/hooks/useGetCampaigns";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Campaigns = () => {
  const router = useRouter();
  const { data } = useGetCampaigns();
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5 flex w-full">
        <div>
          <Button
                onClick={() => router.push("/")}
                className="mb-4"
                size="sm"
              >
                Back to Home
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">Campaigns</h2>
          <p className="text-muted-foreground">
            Select your current campaign to retrieve the right data.
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {data?.items?.map((item: any) => {
          return <CampaignCard campaign={item} />;
        })}
      </div>
    </div>
  );
};

export default Campaigns;
