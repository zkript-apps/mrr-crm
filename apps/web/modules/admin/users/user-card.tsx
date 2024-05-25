"use client";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { T_User } from "./hooks/useAddUser";
import EditUserSheet from "./edit-user-sheet";
import { T_Campaign } from "@repo/contract";

export default function UserCard({
  user,
}: {
  user: T_User;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{user.firstName} {user.lastName}</CardTitle>
        <CardDescription>{user.role} ({(user.campaignId as T_Campaign).title})</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <EditUserSheet user={user} />
      </CardFooter>
    </Card>
  );
}
