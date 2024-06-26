"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInformation from "./components/basic-information";
import useGetCampaignTitleAndDescription from "./components/basic-information/hooks/useGetCampaignTitleAndDescription";
import { Skeleton } from "@/components/skeleton";
import PaymentHistory from "./components/payment-history";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { LucideArrowLeft } from "lucide-react";
import useAuthStore from "@/common/store/useAuthStore";
import { T_Campaign } from "@repo/contract";
import { toast } from "sonner";

const Lead = () => {
  const router = useRouter();
  const params = useParams();
  const campaignId = params.campaignId as string;
  const auth = useAuthStore(
    (state) => state,
  );
  if(campaignId && auth.role !== "Admin") {
    toast.error("Unauthorized", { id: "Unauthorized" })
    router.push("/dashboard")
  }
  const { data: titleAndDescription, isLoading: isTitleAndDescriptionLoading } =
    useGetCampaignTitleAndDescription(campaignId ? campaignId : (auth.campaignId as T_Campaign)?._id as string);
  return (
    <div className="space-y-6 p-10 pb-16">
      <div>
        <Button onClick={() => router.push("/dashboard")} variant="outline" size="sm">
          <LucideArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Button>
      </div>
      <div className="flex flex-col">
        {titleAndDescription?.item ? (
          !isTitleAndDescriptionLoading ? (
            <div>
              <div className="text-xl font-semibold">
                {titleAndDescription?.item.title
                  ? titleAndDescription?.item.title
                  : "No title"}
              </div>
              <div className="text-gray-500">
                {titleAndDescription?.item.description
                  ? titleAndDescription?.item.description
                  : "No description"}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-4 w-64" />
            </div>
          )
        ) : (
          <div>
            <div className="text-xl font-semibold">No title</div>
            <div className="text-gray-500">No description</div>
          </div>
        )}
        <Separator className="mt-6" />
      </div>
      <div>
        {/* <Tabs tabs={tabs} /> */}
        <Tabs defaultValue="basicInformation" className="w-full">
          <TabsList>
            <TabsTrigger value="basicInformation">
              Basic Information
            </TabsTrigger>
            <TabsTrigger value="paymentHistory">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent className="mt-8" value="basicInformation">
            <BasicInformation />
          </TabsContent>
          <TabsContent className="mt-8" value="paymentHistory">
            <PaymentHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Lead;
