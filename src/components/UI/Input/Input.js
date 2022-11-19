import React from 'react';
import './Input.css';

export const Input = ({placeholder, className, ...props}) => {
    return (
        <div className={`Input ${className}`}>
            <input type="text" {...props} required/>
            {placeholder ? <label>{placeholder}</label> : ''}
        </div>
    );
};

