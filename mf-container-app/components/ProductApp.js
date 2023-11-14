import { mount } from 'product/ProductApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(()=> {
        mount(ref.current);
    });

     return (
        <div className="test">
            <div ref={ref}></div>;
        </div>
     )

};