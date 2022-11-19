import React, {useEffect, useState} from 'react';
import './Checkbox.css';

export const Checkbox = ({onChange, ...props}) => {
    const [check, setCheck] = useState(props.check || false);

    const checkHandler = () => {
        setCheck(!check);
        onChange(!check);
    }

    return (
        <span className='Checkbox' onClick={checkHandler}>
                <i className={`${check ? 'fa fa-check' : ''}`}/>
            </span>
    );
};

