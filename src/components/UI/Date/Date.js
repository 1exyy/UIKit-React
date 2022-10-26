import React from 'react';
import './Date.css';

const Date = (props) => {

    const pickerHandler = (event) => {
        event.currentTarget.children[0].showPicker()
    }

    return (
        <label className='Date' onClick={pickerHandler}>
            <input type="date" {...props} required/>
            <i className="fa fa-calendar"/>
        </label>
    );
};

export default Date;
