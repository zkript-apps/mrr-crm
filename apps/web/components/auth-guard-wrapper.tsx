"use client";
import useVerifyAuth from "@/common/hooks/useVerifyAuth";
import useAuthStore from "@/common/store/useAuthStore";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthGuardWrapper = ({ children }: Props) => {
  const router = useRouter();
  const { data, isLoading } = useVerifyAuth();
  const updateAuth = useAuthStore((state) => state.update);
  const authUserId = useAuthStore((state) => state._id);
  if(!isLoading && data?.error) {
    router.push("/")
  } if(isLoading) {
    return <div className="p-4">Loading...</div>
  } else if(!isLoading && !data?.error) {
    if(!authUserId) {
      updateAuth(data?.item)
    }
  }
  return (
    <>{children}</>
  );
};

export default AuthGuardWrapper;
