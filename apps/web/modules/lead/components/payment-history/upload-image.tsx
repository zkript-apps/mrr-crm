import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { useRef, useState } from 'react';
import useUploadPaymentReceipt from './hooks/useUploadPaymentReceipt';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const UploadImage = ({ isLoading, leadId }: { isLoading: boolean, leadId: string }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { mutate, isPending: isUpdateCampaignLeadLoading } = useUploadPaymentReceipt("663ee9c094a8bb883db97936", leadId);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const onUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      mutate(formData, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['payment-history'],
            refetchType: 'active',
          });
          toast.success("Image successfully uploaded");
        },
        onError() {
          toast.error("An unexpected error has occurred, try again");
        }
      });
    }
  };

  return (
    <div className="mt-4 flex gap-1 flex-col">
      <label className="text-sm text-gray-500">
        Receipt Image
      </label>
      <div
        className="border-2 border-dashed border-gray-300 rounded p-4 flex flex-col items-center justify-center cursor-pointer"
        onClick={handleFileClick}
      >
        <input
          ref={fileInputRef}
          disabled={isLoading}
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
      <Button type='button' onClick={onUpload} className='w-1/3 mt-2' disabled={isLoading || !file}>
        Upload
      </Button>
    </div>
  );
};

export default UploadImage;
