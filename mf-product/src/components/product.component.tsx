import React, { useState } from 'react';

interface Product {
  name: string;
  category: string;
  price: number;
}


function product(props: Product) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="border-2 border-blue-500 shadow-md rounded p-3 grid grid-cols-3 gap-2">
      <div className='col-span-2'>
        <div className='text-lg'>Name: {props.name}</div>
        <div className='text-base'>Category: {props.category}</div>
        <div className='text-base'>Price: {props.price}</div>
      </div>
      <div className='self-center col-span-1 justify-self-end'>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} />
      </div>
    </div>
  );
}

export default product;