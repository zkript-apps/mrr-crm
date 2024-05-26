"use client";
import useAuthStore from "@/common/store/useAuthStore";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
};

const AdminRoleWrapper = ({ children }: Props) => {
  const router = useRouter();
  const role = useAuthStore((state) => state.role);
  console.log
  if(role && role !== "Admin") {
    toast.error("Unauthorized", { id: "Unauthorized" })
    router.push("/dashboard")
  } else if(!role) {
    router.push("/")
  }
  return (
    <>{children}</>
  );
};

export default AdminRoleWrapper;
