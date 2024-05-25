"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import AddUserSheet from "./add-user-sheet";
import useGetUsers from "./hooks/useGetUsers";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LucideArrowLeft } from "lucide-react";
import UserCard from "./user-card";
import { T_User } from "./hooks/useAddUser";

const AdminUsers = () => {
  const router = useRouter();
  const { data } = useGetUsers();

  return (
    <div className="space-y-6 p-10 pb-16">
      <Button onClick={() => router.push("/dashboard")} variant="outline" size="sm">
        <LucideArrowLeft className="h-4 w-4 mr-2"/> Back to Dashboard
      </Button>
      <div className="space-y-0.5 flex w-full">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Users lists to manage their information
          </p>
        </div>
        <div className="flex items-center flex-grow justify-end space-x-4">
          <AddUserSheet />
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data?.items?.map((item: T_User) => {
          return <UserCard user={item} />;
        })}
      </div>
    </div>
  );
};

export default AdminUsers;
