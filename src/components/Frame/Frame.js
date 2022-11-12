import React from 'react';
import './Frame.css';

const Frame = (props) => {
    return (
        <div className={`Frame ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Frame;
