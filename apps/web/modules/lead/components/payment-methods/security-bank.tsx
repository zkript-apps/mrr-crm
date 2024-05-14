import React from 'react'

function SecurityBank() {
  const steps = [
    {
      number: 1,
      description: "Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla at volutpat diam ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
    },
    {
      number: 2,
      description: "Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla at volutpat diam ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
    },
    {
      number: 3,
      description: "Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla at volutpat diam ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
    },
    {
      number: 4,
      description: "Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla at volutpat diam ut. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin."
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

export default SecurityBank