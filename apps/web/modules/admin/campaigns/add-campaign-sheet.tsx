import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as XLSX from 'xlsx';

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

export default function AddCampaignSheet() {
  const [patterns, setPatterns] = useState<string[] | null>(null);
  const [leadValues, setLeadValues] = useState(null);
  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target?.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName as string];
      const sheetData = XLSX.utils.sheet_to_json(sheet as any);
      const getPatterns = sheetData.length > 0 ? Object.keys(sheetData[0] as any) : []
      setPatterns(getPatterns as any);  
      setLeadValues(sheetData as any);
    };

    reader.readAsBinaryString(file);
  };
  console.log('patters', patterns)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Campaign</Button>
      </SheetTrigger>
      <SheetContent>
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
            <Input id="title" required className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="description" required className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right" htmlFor="picture">Excel File</Label>
            <Input id="picture" type="file" className="col-span-3" onChange={handleFileUpload}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Unique Id
            </Label>
            <Select required disabled={!patterns}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {patterns && patterns?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Master Password
            </Label>
            <Input id="description" required className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
