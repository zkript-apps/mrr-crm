import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUpdateUser from "./hooks/useUpdateUser";
import { toast } from "sonner";
import { T_User } from "./hooks/useAddUser";
import useGetCampaigns from "../campaigns/hooks/useGetCampaigns";
import { T_Campaign } from "@repo/contract";
import { useState } from "react";

export default function EditUserSheet({
  user,
}: {
  user: T_User;
}) {
  const queryClient = useQueryClient();
  const userId = user._id ?? "";
  const { data } = useGetCampaigns();
  const { mutate } = useUpdateUser(userId);
  const [role, setRole] = useState("");
  const [campaignId, setCampaignId] = useState("");
  const { register, handleSubmit, reset } = useForm<T_User>();

  const onSubmit: SubmitHandler<T_User> = (data: T_User) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["users"],
            refetchType: "active",
          });
          toast.success("Successfully Update User");
        } else {
          toast.error(data.message);
        }
      },
      onError() {
        toast.error("An unexpected error has occurred, try again");
      },
    };
    mutate({ ...data, campaignId: campaignId ? campaignId : user.campaignId, role: role ? role : user.role }, callBackReq);
    reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Edit User</SheetTitle>
            <SheetDescription>
              Add your user here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Username
              </Label>
              <Input
                {...register("username", { required: true })}
                id="username"
                defaultValue={user.username}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Password
              </Label>
              <Input
                defaultValue={user.password}
                {...register("password")}
                type="text"
                id="password"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                First Name
              </Label>
              <Input
                {...register("firstName", { required: true })}
                id="firstName"
                defaultValue={user.firstName}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Last Name
              </Label>
              <Input
                {...register("lastName", { required: true })}
                id="lastName"
                defaultValue={user.lastName}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Role
              </Label>
              <Select
                defaultValue={user.role}
                onValueChange={(selectedValue) => {
                  setRole(selectedValue);
                }}
                required
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">
                    Admin
                  </SelectItem>
                  <SelectItem value="Agent">
                    Agent
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Campaign
              </Label>
              <Select
                defaultValue={(user.campaignId as T_Campaign)?._id}
                onValueChange={(selectedValue) => {
                  setCampaignId(selectedValue);
                }}
                required
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select" />
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
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
