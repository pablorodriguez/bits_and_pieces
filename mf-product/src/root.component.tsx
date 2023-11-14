import React from "react";
import ReactDOM from "react-dom";

import Product from './components/Product'; 

import "./index.scss";

export default function Root(props) {
  const products = [{
    name: 'MacBook Pro',
    category: 'electronic',
    price: 100.00
  }, {
    name: "Monitor",
    category: "electronic",
    price: 200.00
  }, {
    name: "Mouse",
    category: "electronic",
    price: 20.00
  }, {
    name: "Keyboard",
    category: "electronic",
    price: 20.00
  }, {
    name: "Headphones",
    category: "electronic",
    price: 20.00
  }, {
    name: "Speakers",
    category: "electronic",
    price: 20.00
  }, {
    name: "Shoes",
    category: "clothing",
    price: 20.00
  }, {
    name: "Shirt",
    category: "clothing",
    price: 20.00
  }, {
    name: "Pants",
    category: "clothing",
    price: 20.00
  }, {
    name: "Hat",
    category: "clothing",
    price: 20.00
  }, {
    name: "Socks",
    category: "clothing",
    price: 20.00
  }
  ];

  return (
    <div className="container mx-auto font-sans text-base">
      <div className="mt-10 text-3xl mx-auto max-w-6xl flex flex-col space-y-4">
        {products.map((product) => {
          return <Product name={product.name} category={product.category} price={product.price} />
        })}
      </div>
    </div>
  );
}
