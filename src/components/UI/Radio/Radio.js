import React, {useState} from 'react';
import './Radio.css';

const Radio = ({onChange, ...props}) => {
    const [check, setCheck] = useState(props.check || false);

    const radioCheckHandler = () => {
        setCheck(!check);
        onChange(!check);
    }

    return (
        <span className={`Radio ${check ? 'active' : ''}`} onClick={radioCheckHandler}>
            <span className={check ? '' : 'hide'}/>
        </span>
    );
};

export default Radio;
