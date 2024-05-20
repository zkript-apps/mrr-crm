"use client"
import useAuthStore from "@/common/store/useAuthStore";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  const role = useAuthStore((state) => state.role);
  return (
    <div className="flex gap-3 p-4">
      <Link href="/search" className="underline text-blue-400">
        Search Lead
      </Link>
      <Link href="/campaigns" className="underline text-blue-400">
        Campaigns
      </Link>
      {/* TODO: NEED TO ACTIVATE WATCHTOWER_CLEANUP IN THE SERVER */}
      {role === "Admin" && (
        <Link href="/admin/campaigns" className="underline text-blue-400">
          Admin
        </Link>
      )}
      <Link href="/logout" className="underline text-blue-400">
        Logout
      </Link>
    </div>
  );
};

export default DashboardPage;
