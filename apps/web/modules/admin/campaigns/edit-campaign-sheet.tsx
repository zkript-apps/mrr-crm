import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { T_Campaign } from "@repo/contract";
import { useForm, SubmitHandler } from "react-hook-form"
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
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import useUpdateCampaign from "./hooks/useUpdateCampaign";
import { toast } from "sonner";

export default function EditCampaignSheet({ campaign }: { campaign: T_Campaign }) {
  const queryClient = useQueryClient()
  const campaignId = campaign._id ?? ""
  const { mutate } = useUpdateCampaign(campaignId);  
  const {
    register,
    handleSubmit,
    reset
  } = useForm<any>()

  const [leadUniqueKey, setLeadUniqueKey] = useState<string | null>(null);
  
  const onSubmit: SubmitHandler<any> = (data: any) => {
  const { title, description, masterPassword } = data;
  const campaignData = {
    title,
    description,
    leadUniqueKey: leadUniqueKey,
    masterPassword
  };
    const callBackReq = {
      onSuccess: () => {      
          queryClient.invalidateQueries({ 
            queryKey: ["campaign", "title-description"],
            refetchType: 'active',
          });
          
          toast.success("Successfully Update Campaign");
          },
        onError() {
        toast.error("An unexpected error has occurred, try again")
      }
    };
    mutate(campaignData, callBackReq)
    reset()
  }
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SheetHeader>
          <SheetTitle>Edit Campaign</SheetTitle>
          <SheetDescription>
            Add your campaign here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input 
             {...register("title")} 
             id="title" defaultValue={campaign.title} required className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input  
            {...register("description")} 
            id="description" defaultValue={campaign.description} required className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Unique Id
            </Label>
            <Select defaultValue={campaign.leadUniqueKey}
            onValueChange={(selectedValue) => {            
              setLeadUniqueKey(selectedValue);
              }} required>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {campaign.patterns.map((option) => (
                  <SelectItem key={option.name} value={option.name}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Master Password
            </Label>
            <Input 
            {...register("masterPassword")} 
            id="description" required className="col-span-3" />
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
  )
}
