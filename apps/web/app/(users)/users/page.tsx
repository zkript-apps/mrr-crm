import AdminRoleWrapper from "@/components/admin-role-wrapper";
import AdminUsers from "@/modules/admin/users"
import React from "react";

const AdminCampaignsPage = () => {
  return (
    <AdminRoleWrapper>
      <AdminUsers />
    </AdminRoleWrapper>
  );
};

export default AdminCampaignsPage;
