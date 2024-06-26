import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as XLSX from "xlsx";
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
import { useState } from "react";
import useAddCampaign from "./hooks/useAddCampaign";
import { toast } from "sonner";

export default function AddCampaignSheet() {
  const queryClient = useQueryClient();
  const { mutate } = useAddCampaign();
  const { register, handleSubmit, reset } = useForm<any>();
  const [file, setFile] = useState<File | null>(null);
  const [patterns, setPatterns] = useState<string[] | null>(null);
  const [leadUniqueKey, setLeadUniqueKey] = useState<string | null>(null);
  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    setFile(file)
    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target?.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName as string];
      const sheetData = XLSX.utils.sheet_to_json(sheet as any);
      const getPatterns =
        sheetData.length > 0 ? Object.keys(sheetData[0] as any) : [];
      setPatterns(getPatterns as any);
    };
    reader.readAsBinaryString(file);
  };

  const onSubmit: SubmitHandler<any> = (data: any) => {
    const { title, description } = data;
    const formData = new FormData();
    formData.append("file", file as File);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("leadUniqueKey", leadUniqueKey as string);

    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["campaigns"],
            refetchType: "active",
          });
          toast.success("Successfully added Campaign");
        } else {
          toast.error(data.message);
        }
      },
      onError() {
        toast.error("An unexpected error has occurred, try again");
      },
    };
    mutate(formData, callBackReq);
    reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Campaign</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Add Campaign</SheetTitle>
            <SheetDescription>
              Make changes to your campaign here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                {...register("title")}
                id="title"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                {...register("description")}
                id="description"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="picture">
                Excel File
              </Label>
              <div className="col-span-3">
                <Input
                  id="picture"
                  type="file"
                  onChange={handleFileUpload}
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
                />
                <span className="text-gray-400 text-xs italic">Only accepts .xlsx and .csv files</span>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Unique Id
              </Label>
              <Select
                onValueChange={(selectedValue) => {
                  setLeadUniqueKey(selectedValue);
                }}
                required
                disabled={!patterns}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {patterns &&
                    patterns?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
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
