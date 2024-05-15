import { Skeleton } from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import useUpdateCampaignLeadById, {
  T_Campaign_Lead,
} from "./hooks/useUpdateCampaignLeadById";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useCampaignDataStore from "@/common/store/useCampaignDataStore";

interface T_Remark {
  comment: string;
}

function Remarks({
  campaignLead,
  isLoading,
  leadId,
}: {
  campaignLead: T_Campaign_Lead;
  isLoading: boolean;
  leadId: string;
}) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<T_Remark>();
  const campaignId = useCampaignDataStore(
    (state) => state.campaignData?.campaignId,
  );
  const { mutate, isPending: isUpdateCampaignLeadLoading } =
    useUpdateCampaignLeadById(campaignId as string, leadId);
  const onSubmit = (data: any) => {
    const formattedData = {
      ...campaignLead,
      remarks: [
        ...campaignLead.remarks,
        {
          ...data,
          date: new Date().toISOString(),
        },
      ],
    };
    mutate(formattedData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["campaign-lead"],
        });
        reset();
        toast.success("Remarks saved");
      },
      onError() {
        toast.error("An unexpected error has occurred, try again");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {campaignLead && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Remarks</label>
              <Textarea
                {...register("comment", { required: true })}
                disabled={isUpdateCampaignLeadLoading}
                placeholder="Enter your remarks here"
                className="h-32"
              />
              <div className="flex justify-end">
                <Button disabled={isUpdateCampaignLeadLoading} className="w-1/6">
                  Add
                </Button>
              </div>
            </div>
          </form>

          <div className="flex flex-col gap-4 max-h-96 overflow-auto">
            {isLoading ? (
              <div>
                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </div>
                <Separator className="h-0.5" />
                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </div>
                <Separator className="h-0.5" />
                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                {campaignLead ? (
                  campaignLead.remarks
                    .sort((a, b) => {
                      const dateA = new Date(a.date).getTime();
                      const dateB = new Date(b.date).getTime();
                      return dateB - dateA;
                    })
                    .map((remark, index) => (
                      <div key={index}>
                        <div className="p-4">
                          <div className="text-xs text-gray-500">
                            {format(new Date(remark.date), "MMMM d, yyyy h:mm a")}
                          </div>
                          <div>{remark.comment}</div>
                        </div>
                        {/* Render Separator only if it's not the last item */}
                        {index !== campaignLead.remarks.length - 1 && (
                          <Separator className="h-0.5" />
                        )}
                      </div>
                    ))
                ) : (
                  <div className="text-gray-500">
                    No remarks yet, add one using the form above.
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Remarks;
