import React, {useState} from 'react';
import './Switch.css';

export const Switch = () => {
    const [check, setCheck] = useState(false);

    const checkHandler = () => {
        setCheck(!check);
    }

    return (
        <label className={`Switch ${check ? 'check' : ''}`}>
            <input type="checkbox" id='input' onClick={checkHandler}/>
            <span/>
        </label>
    );
};

