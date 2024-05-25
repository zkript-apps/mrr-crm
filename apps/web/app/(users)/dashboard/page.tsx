"use client"
import useAuthStore from "@/common/store/useAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const DashboardPage = () => {
  const role = useAuthStore((state) => state.role);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (search) {
      router.push(`/lead/${search}`);
    } else {
      toast.error("Please add search phrase");
    }
  };
  return (
    <div className="p-4">
      <div className="flex gap-3">
        {/* TODO: NEED TO ACTIVATE WATCHTOWER_CLEANUP IN THE SERVER */}
        {role === "Admin" && (
          <>
            <Link href="/campaigns" className="underline text-blue-400">
              Campaigns
            </Link>
            <Link href="/users" className="underline text-blue-400">
              Users
            </Link>
          </>
        )}
        <Link href="/logout" className="underline text-blue-400">
          Logout
        </Link>
      </div>
      <form
        className="flex w-full max-w-sm items-center space-x-2 mt-8"
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          placeholder="Search a lead by unique id"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </div>

  );
};

export default DashboardPage;
