import React from 'react'
import BasicInformationFields from './basic-information-fields'
import Remarks from './remarks'

function BasicInformation() {
  return (
    <div className='flex gap-44'>
      <div className='w-1/2'>
        <BasicInformationFields />
      </div>
      <div className='w-1/2'>
        <Remarks />
      </div>
    </div>
  )
}

export default BasicInformation