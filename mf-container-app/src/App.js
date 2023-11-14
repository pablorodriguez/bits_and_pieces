import React from 'react';
import ProductApp from '../components/ProductApp';
import SummaryApp from '../components/SummaryApp';

export default() => {
    return <div>
        <div>
          <h4>App Container</h4>
        </div>
        <hr/>
        <div>
          <h4>Product App</h4>
          <ProductApp></ProductApp>
        </div>
        <hr/>
        <div>
          <h4>Summary App</h4>
          <SummaryApp></SummaryApp>
        </div>
        <hr/>
    </div>
}