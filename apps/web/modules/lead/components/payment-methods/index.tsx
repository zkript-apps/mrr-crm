import React, { useState } from 'react'
import { SideNav } from './side-nav'
import Gcash from './gcash';
import Bdo from './bdo';
import SecurityBank from './security-bank';

function PaymentMethods() {
  const [selectedItem, setSelectedItem] = useState<"GCASH" | "BDO" | "Security Bank">("GCASH");
  const links = [
    {
      title: "GCASH",
      label: "",
    },
    {
      title: "BDO",
      label: "",
    },
    {
      title: "Security Bank",
      label: "",
    }
  ]

  const getContent = (title: "GCASH" | "BDO" | "Security Bank") => {
    switch (title) {
      case "GCASH":
        return <Gcash />;
      case "BDO":
        return <Bdo />;
      case "Security Bank":
        return <SecurityBank />;
      default:
        return <Gcash />;
    }
  };
  
  return (
    <div className='flex gap-44'>
      <div className='w-1/6'>
        <SideNav
          links={links}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      </div>
      <div className='w-5/6'>
        {getContent(selectedItem)}
      </div>
    </div>
  )
}

export default PaymentMethods
