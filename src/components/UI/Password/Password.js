import React, {useState} from 'react';
import './Password.css';

const Password = (props) => {
    const [visible, setVisible] = useState(false);

    const visibleHandler = () => {
        setVisible(!visible);
    }

    return (
        <label className='Password'>
            <input type={visible ? 'text' : 'password'} {...props} required/>
            <i className={`fa ${visible ? 'fa-eye' : 'fa-eye-slash'}`} onClick={visibleHandler}/>
        </label>
    );
};

export default Password;
