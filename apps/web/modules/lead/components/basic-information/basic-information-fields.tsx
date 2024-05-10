import { Input } from '@/components/ui/input'
import React from 'react'

const fields = [
  {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  }, {
    key: "firstName",
    label: "First Name",
    placeholder: "First Name",
    helperText: "",
    defaultValue: "John"
  },
]

function BasicInformationFields() {
  return (
    <div className='w-full grid grid-cols-3 gap-8'>
      {fields.map((field) => (
        <div className='flex flex-col gap-1'>
          <label className='text-sm'>{field.label}</label>
          <Input placeholder={field.placeholder} defaultValue={field.defaultValue} />
          {field.helperText ? <div className='text-xs text-gray-500'>{field.helperText}</div> : null}
        </div>
      ))}
    </div>
  )
}

export default BasicInformationFields