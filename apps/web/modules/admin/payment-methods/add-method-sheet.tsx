"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

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
import useAddPaymentMethod, { T_PaymentMethod } from "./hooks/useAddPaymentMethod";

export default function AddPaymentMethodSheet() {
  const { mutate } = useAddPaymentMethod();
  const {
    register,
    handleSubmit
  } = useForm<any>()

  const onSubmit: SubmitHandler<T_PaymentMethod> = (data: T_PaymentMethod) => {
    const campaignDataString = localStorage.getItem("campaign");
    if(campaignDataString){
    const campaignData = JSON.parse(campaignDataString);
    const { title, ...rest } = data;
    const steps = Object.keys(rest.steps).map((key) => ({
        step: parseInt(key) + 1,
        instruction: rest.steps[parseInt(key)]?.instruction || '', 
    }));
    const paymentMethodData = {
        campaignId: campaignData.campaignId,
        title,
        steps
    };
    mutate(paymentMethodData);
  }
  };

  const [steps, setSteps] = useState([{ step: 1, value: '' }]);

  const addStep = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newStep = {
      step: steps.length + 1,
      value: '',
    };
    setSteps([...steps, newStep]);
  };

  const handleStepChange = (id: number, value: string) => {
    const updatedSteps = steps.map(step =>
      step.step === id ? { ...step, value } : step
    );
    setSteps(updatedSteps);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New Method</Button>
      </SheetTrigger>
      <SheetContent>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input 
            {...register("title")} 
             id="name" className="col-span-3" />
          </div>
          {steps.map(step => (
              <div key={step.step} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={`step-${step.step}`} className="text-right">
                  Step {step.step}
                </Label>
                <Input
                  {...register(`steps[${step.step - 1}].instruction`)} 
                  id={`step-${step.step}`}
                  className="col-span-3"
                  onChange={e => handleStepChange(step.step, e.target.value)}          
                />
              </div>
            ))}
          <div className="items-center gap-4 ml-auto">
          <Button
                variant="ghost"
                className="rounded-lg"
                onClick={addStep}
              >
                Add Step
              </Button>
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


