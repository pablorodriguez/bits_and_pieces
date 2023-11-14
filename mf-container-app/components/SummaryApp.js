import { mount } from 'summary/summaryApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(()=> {
        mount(ref.current);
    });

     return <div className="item summary" ref={ref}></div>;
};