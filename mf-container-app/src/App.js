import React from 'react';
import ProductApp from '../components/ProductApp';
import SummaryApp from '../components/SummaryApp';

export default() => {
    return <div>
        <div>
          <ProductApp></ProductApp>
        </div>
        <hr/>
        <div>
          <SummaryApp></SummaryApp>
        </div>
        <hr/>
    </div>
}