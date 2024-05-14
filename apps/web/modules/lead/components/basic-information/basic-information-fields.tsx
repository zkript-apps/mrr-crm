import { Skeleton } from '@/components/skeleton';
import { Input } from '@/components/ui/input';
import React from 'react';

function BasicInformationFields({ fields, isLoading }: { fields: Record<string, string>, isLoading: boolean }) {
  return (
    <div>
      {isLoading ? (
        <div className='w-full grid grid-cols-3 gap-8'>
          <div className='flex flex-col gap-1'>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-64" />
          </div>
          <div className='flex flex-col gap-1'>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-64" />
          </div>
          <div className='flex flex-col gap-1'>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-64" />
          </div>
        </div>
      ) : (
        <div className='w-full grid grid-cols-3 gap-8'>
          {Object?.entries(fields).map(([key, value]) => (
            <div key={key} className='flex flex-col gap-1'>
              <label htmlFor={key} className='text-sm'>{key}</label>
              <Input id={key} defaultValue={value} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BasicInformationFields;
