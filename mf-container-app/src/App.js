import React from 'react';
import ProductApp from '../components/ProductApp';
import SummaryApp from '../components/SummaryApp';
import CheckoutApp from '../components/CheckoutApp';
import 'zone.js';

import "./index.scss";

export default() => {
    return (
      <div className='container-app'>
        <ProductApp></ProductApp>
        <SummaryApp></SummaryApp>
        <CheckoutApp></CheckoutApp>
      </div>
    )
}