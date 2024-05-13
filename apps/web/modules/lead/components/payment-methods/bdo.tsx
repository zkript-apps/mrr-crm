import React from 'react'

function Bdo() {
  const steps = [
    {
      number: 1,
      description: "Viverra justo nec ultrices dui. Vel pretium lectus quam id leo in. Libero enim sed faucibus turpis in eu mi bibendum. Eget arcu dictum varius duis at consectetur lorem. Tempor commodo ullamcorper a lacus."
    },
    {
      number: 2,
      description: "Viverra justo nec ultrices dui. Vel pretium lectus quam id leo in. Libero enim sed faucibus turpis in eu mi bibendum. Eget arcu dictum varius duis at consectetur lorem. Tempor commodo ullamcorper a lacus."
    },
    {
      number: 3,
      description: "Viverra justo nec ultrices dui. Vel pretium lectus quam id leo in. Libero enim sed faucibus turpis in eu mi bibendum. Eget arcu dictum varius duis at consectetur lorem. Tempor commodo ullamcorper a lacus."
    },
    {
      number: 4,
      description: "Viverra justo nec ultrices dui. Vel pretium lectus quam id leo in. Libero enim sed faucibus turpis in eu mi bibendum. Eget arcu dictum varius duis at consectetur lorem. Tempor commodo ullamcorper a lacus."
    },
  ]
  return (
    <div className='flex flex-col gap-12'>
      {steps.map((step) => (
        <div className='flex flex-col gap-6'>
          <div className='font-medium'>
            Step {step.number}
          </div>
          <div className='text-gray-500'>
            {step.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bdo