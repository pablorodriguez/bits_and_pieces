import React, { useState } from 'react';

function productList () {
    const productsList = [{
        name: 'MacBook Pro',
        category: 'electronic',
        price: 100.00,
        checked: false,
        id: 1
      }, {
        name: "Monitor",
        category: "electronic",
        price: 200.00,
        checked: false,
        id: 2
      }, {
        name: "Speakers",
        category: "electronic",
        price: 20.00,
        checked: false,
        id: 6
      }, {
        name: "Shoes",
        category: "clothing",
        price: 20.00,
        checked: false,
        id: 7
      }, {
        name: "Socks",
        category: "clothing",
        price: 20.00,
        checked: false,
        id: 11
      }
      ];

    const [products, setProducts] = useState(productsList);

    const handleCheckboxClick = (index) => {
      let newProducts = [...products];
      newProducts[index]['checked'] = !newProducts[index]['checked']
      setProducts(newProducts);
      let prd = products[index]
      window.dispatchEvent(new CustomEvent((prd['checked'] ? "addToCart" : "removeFromCart"), { detail: prd }))
    };

    const productSelected = () => {
      const prds = products.filter((prd) => {return prd.checked})
      prds.each((prd) => window.dispatchEvent(new CustomEvent("addToCart", { detail: prd })))
    }

    const handleClickBuy = () => {
    }

    return (
        <div id="product-list" className="container mx-auto font-sans text-base">
            <h1>Product List</h1>
            <div className="mt-10 text-3xl mx-auto max-w-6xl flex flex-col space-y-4">
              {products.map((product, index) => {
                return (
                  <div key={product.id} className="border-2 border-blue-500 shadow-md rounded p-3 grid grid-cols-3 gap-2">
                    <div className='col-span-2'>
                        <div className='text-lg'>Name: {product.name}</div>
                        <div className='text-base'>Category: {product.category}</div>
                        <div className='text-base'>Price: {product.price}</div>
                    </div>
                    <div className='self-center col-span-1 justify-self-end'>
                        <input type="checkbox" checked={product.checked} id={index} onChange={ () => handleCheckboxClick(index)} />
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      );
};

export default productList;