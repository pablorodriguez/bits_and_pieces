import { mount } from 'checkout/CheckoutApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(()=> {
        mount();
    }, []);

     return (
        <div className='item'>
            <app-checkout-root ref={ref}></app-checkout-root>
        </div>
     )

};