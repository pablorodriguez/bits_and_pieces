import React from 'react';
import ProductApp from '../components/ProductApp';
import SummaryApp from '../components/SummaryApp';
//import CheckoutApp from '../components/CheckoutApp';
//<CheckoutApp></CheckoutApp>

export default() => {
    return (
      <div>
        <ProductApp></ProductApp>

        <SummaryApp></SummaryApp>
      </div>
    )
}