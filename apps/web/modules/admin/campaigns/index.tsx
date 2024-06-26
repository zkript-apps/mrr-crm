"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import CampaignCard from "@/components/campaign-card";
import AddCampaignSheet from "./add-campaign-sheet";
import useGetCampaigns from "./hooks/useGetCampaigns";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LucideArrowLeft } from "lucide-react";

const AdminCampaigns = () => {
  const router = useRouter();
  const { data } = useGetCampaigns();

  return (
    <div className="space-y-6 p-10 pb-16">
      <Button onClick={() => router.push("/dashboard")} variant="outline" size="sm">
        <LucideArrowLeft className="h-4 w-4 mr-2"/> Back to Dashboard
      </Button>
      <div className="space-y-0.5 flex w-full">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Campaigns</h2>
          <p className="text-muted-foreground">
            Select your current campaign to retrieve the right data.
          </p>
        </div>
        <div className="flex items-center flex-grow justify-end space-x-4">
          <AddCampaignSheet />
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data?.items?.map((item: any) => {
          return <CampaignCard campaign={item} />;
        })}
      </div>
    </div>
  );
};

export default AdminCampaigns;
