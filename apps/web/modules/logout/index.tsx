"use client"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function Logout() {
  const queryClient = useQueryClient();
  const router = useRouter()
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["auth"],
      refetchType: "active",
    });
    Cookies.remove("token")
    router.push("/")
  }, [])
  return <div className="p-4">Loading...</div>
}
