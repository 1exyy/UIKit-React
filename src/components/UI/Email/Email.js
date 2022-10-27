import React, {useState} from 'react';
import './Email.css';

const Email = ({className, ...props}) => {
    const [value, setValue] = useState('');
    return (
        <div className={`Input ${className}`}>
            <input type="email" {...props} required onChange={(e) => setValue(e.target.value)}/>
            <label className={value ? 'not-empty' : ''}>Email</label>
        </div>
    );
};

export default Email;
