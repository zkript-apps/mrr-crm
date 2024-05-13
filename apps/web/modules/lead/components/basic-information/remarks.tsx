import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const remarks = [
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    date: "Jan 1, 2024 8:00 am",
    remark: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  
]

function Remarks() {
  return (
    <div className='w-full flex flex-col gap-12'>
      <div className='flex flex-col gap-2'>
        <label className='text-sm'>
          Remarks
        </label>
        <Textarea placeholder='Enter your remarks here' className='h-32' />
        <div className='flex justify-end'>
          <Button className='w-1/6'>Add</Button>
        </div>
      </div>
      <div className='flex flex-col gap-4 max-h-96 overflow-auto'>
        {remarks.map((remark, index) => (
          <div key={index}>
            <div className='p-4'>
              <div className='text-xs text-gray-500'>
                {remark.date}
              </div>
              <div>
                {remark.remark}
              </div>
            </div>
            {/* Render Separator only if it's not the last item */}
            {index !== remarks.length - 1 && <Separator className='h-0.5' />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Remarks