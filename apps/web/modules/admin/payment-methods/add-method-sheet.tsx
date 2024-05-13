"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';

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

export default function AddPaymentMethodSheet() {
  const [steps, setSteps] = useState([{ id: 1, value: '@peduarte' }]);

  const addStep = () => {
    const newStep = {
      id: steps.length + 1,
      value: '',
    };
    setSteps([...steps, newStep]);
  };

  const handleStepChange = (id: number, value: string) => {
    const updatedSteps = steps.map(step =>
      step.id === id ? { ...step, value } : step
    );
    setSteps(updatedSteps);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Method</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Payment Method</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          {steps.map(step => (
            <div key={step.id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={`step-${step.id}`} className="text-right">
                Step {step.id}
              </Label>
              <Input
                id={`step-${step.id}`}
                value={step.value}
                className="col-span-3"
                onChange={e => handleStepChange(step.id, e.target.value)}
              />
            </div>
          ))}
          <div className="grid grid-cols-4 items-center gap-4">
            <Button onClick={addStep}>Add Step</Button>
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
