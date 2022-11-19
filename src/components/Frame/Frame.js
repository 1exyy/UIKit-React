import React from 'react';
import './Frame.css';

export const Frame = (props) => {
    return (
        <div className={`Frame ${props.className}`}>
            {props.children}
        </div>
    );
};


