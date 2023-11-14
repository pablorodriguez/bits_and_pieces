import { mount } from 'checkout/CheckoutApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(()=> {
        mount();
    }, []);

     return <app-root ref={ref}></app-root>;
};