"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if(search) {
      router.push(`/lead/${search}`)
    } else {
      toast.error("Please add search phrase")
    }
  }
  return (
    <div className="space-y-6 p-10 pb-16">
      <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={onSubmit}>
        <Input type="text" placeholder="Search by ID" autoFocus onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default Search;
