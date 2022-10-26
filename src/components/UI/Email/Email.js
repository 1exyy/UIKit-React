import React from 'react';
import './Email.css';

const Email = ({className, ...props}) => {
    return (
        <div className={`Input ${className}`}>
            <input type="email" {...props} required/>
            <label>Email</label>
        </div>
    );
};

export default Email;
