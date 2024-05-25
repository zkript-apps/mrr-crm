import React from "react";
import BasicInformationFields from "./basic-information-fields";
import Remarks from "./remarks";
import useGetCampaignLeadById from "./hooks/useGetCampaignLeadById";
import { useParams } from "next/navigation";
import useAuthStore from "@/common/store/useAuthStore";
import { T_Campaign } from "@repo/contract";

function BasicInformation() {
  const params = useParams();
  const leadId = params.leadId as string;
  const auth = useAuthStore(
    (state) => state,
  );
  const { data: campaignLead, isLoading: isCampaignLeadLoading } =
    useGetCampaignLeadById((auth.campaignId as T_Campaign)._id as string, leadId);
  return (
    <div className="flex gap-44">
      <div className="w-1/2">
        {campaignLead?.item ? (
          <BasicInformationFields
            fields={campaignLead.item.values}
            isLoading={isCampaignLeadLoading}
          />
        ) : (
          <div className="text-gray-500">
            There are no lead associated with this id
          </div>
        )}
      </div>
      <div className="w-1/2">
        <Remarks
          campaignLead={campaignLead?.item}
          isLoading={isCampaignLeadLoading}
          leadId={leadId}
        />
      </div>
    </div>
  );
}

export default BasicInformation;
