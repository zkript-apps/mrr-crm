import AdminRoleWrapper from "@/components/admin-role-wrapper";
import AdminCampaigns from "@/modules/admin/campaigns";
import React from "react";

const AdminCampaignsPage = () => {
  return (
    <AdminRoleWrapper>
      <AdminCampaigns />
    </AdminRoleWrapper>
  );
};

export default AdminCampaignsPage;
