import React from 'react';
import ProductApp from '../components/ProductApp';
import SummaryApp from '../components/SummaryApp';
import CheckoutApp from '../components/CheckoutApp';
import 'zone.js';

export default() => {
    return (
      <div>
        <ProductApp></ProductApp>
        <CheckoutApp></CheckoutApp>
        <SummaryApp></SummaryApp>
      </div>
    )
}