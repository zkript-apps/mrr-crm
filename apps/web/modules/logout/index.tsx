"use client"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    Cookies.remove("token")
    router.push("/")
  }, [])
  return <div className="p-4">Loading...</div>
}
