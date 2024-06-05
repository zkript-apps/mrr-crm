"use client"
import useAuthStore from "@/common/store/useAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetCampaigns from "@/modules/admin/campaigns/hooks/useGetCampaigns";
import { T_Campaign } from "@repo/contract";

const DashboardPage = () => {
  const role = useAuthStore((state) => state.role);
  const { data } = useGetCampaigns();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [campaignId, setCampaignId] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (role !== "Admin" && search) {
      router.push(`/lead/${search}`);
    } else if (role === "Admin" && search && campaignId) {
      router.push(`/lead/${search}/${campaignId}`);
    } else {
      toast.error("Please complete all parameters");
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
      {role === "Admin" && (
        <div className="flex w-full max-w-56 items-center space-x-2 mt-8">
          <Select
            required
            onValueChange={(selectedValue) => setCampaignId(selectedValue)}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select campaign" />
            </SelectTrigger>
            <SelectContent>
              {data?.items.map((option: T_Campaign) => (
                <SelectItem key={option.title} value={option._id as string}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <form
        className="flex w-full max-w-sm items-center space-x-2 mt-4"
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
