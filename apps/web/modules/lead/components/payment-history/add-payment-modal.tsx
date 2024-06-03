import React, { ReactNode, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useUpdateCampaignLeadById, {
  T_Campaign_Lead,
} from "../basic-information/hooks/useUpdateCampaignLeadById";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import useUploadPaymentReceipt from "./hooks/useUploadPaymentReceipt";
import useAuthStore from "@/common/store/useAuthStore";
import { T_Campaign } from "@repo/contract";

function AddNewPaymentModal({
  children,
  campaignLead,
  leadId,
}: {
  children: ReactNode;
  campaignLead: T_Campaign_Lead;
  leadId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const auth = useAuthStore(
    (state) => state,
  );
  const { mutate, isPending: isUpdateCampaignLeadLoading } =
    useUpdateCampaignLeadById((auth.campaignId as T_Campaign)?._id as string, leadId);
  const { mutate: uploadImage, isPending: isUploadingImage } =
    useUploadPaymentReceipt();

  const [formData, setFormData] = useState({
    method: "",
    repayAmount: undefined,
    receiptAmount: undefined,
    remarks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (fileName?: string) => {
    setOpen(false);
    const formattedData = {
      ...campaignLead,
      payments: [
        ...campaignLead.payments,
        {
          ...formData,
          repayAmount: Number(formData.repayAmount),
          receiptAmount: Number(formData.receiptAmount),
          agentFirstName: auth.firstName,
          agentLastName: auth.lastName,
          fileName: fileName ? fileName : "",
          date: new Date().toISOString(),
        },
      ],
    };
    mutate(formattedData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["campaign-lead"],
          refetchType: "active",
        });
        toast.success("Payment saved");
      },
      onError() {
        toast.error("An unexpected error has occurred, try again");
      },
    });
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const onUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData, {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: ["payment-history"],
            refetchType: "active",
          });
          onSubmit(data?.item?.fileName);
        },
        onError() {
          toast.error(
            "An unexpected error has occurred when uploading, try again",
          );
          onSubmit();
        },
      });
    }
  };

  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div>{children}</div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add New Payment</AlertDialogTitle>
          </AlertDialogHeader>
          <form ref={formRef} onSubmit={onUpload} className="w-full">
            <div className="flex flex-col gap-1 w-1/2">
              <label className="text-sm text-gray-500">Payment Method</label>
              <div>
                <Input
                  required
                  disabled={isUpdateCampaignLeadLoading}
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm text-gray-500">Repay Amount</label>
                <div>
                  <Input
                    required
                    disabled={isUpdateCampaignLeadLoading}
                    type="number"
                    name="repayAmount"
                    value={formData.repayAmount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm text-gray-500">Receipt Amount</label>
                <div>
                  <Input
                    required
                    disabled={isUpdateCampaignLeadLoading}
                    type="number"
                    name="receiptAmount"
                    value={formData.receiptAmount}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-1 flex-col">
              <label className="text-sm text-gray-500">Remarks</label>
              <div>
                <Textarea
                  disabled={isUpdateCampaignLeadLoading}
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4 flex gap-1 flex-col">
              <label className="text-sm text-gray-500">Receipt Image</label>
              <div
                className="border-2 border-dashed border-gray-300 rounded p-4 flex flex-col items-center justify-center cursor-pointer"
                onClick={handleFileClick}
              >
                <input
                  ref={fileInputRef}
                  disabled={isUploadingImage}
                  name="file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {file ? (
                  <div className="text-sm text-gray-700">
                    Selected file: {file.name}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 flex gap-2">
                    <Upload width={20} />
                    Select Image
                  </div>
                )}
              </div>
            </div>
            <AlertDialogFooter className="mt-4">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button disabled={isUpdateCampaignLeadLoading} type="submit">
                Save
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AddNewPaymentModal;
