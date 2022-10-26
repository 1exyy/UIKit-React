import React, {useState} from 'react';
import './Select.css';

const Select = (props) => {
    const [open, setOpen] = useState(false);
    const [itemText, setItemText] = useState(props.placeholder || '');

    const openHandler = () => {
        setOpen(!open);
    }

    const selectHandler = (event) => {
        setItemText(event.target.innerText)
        openHandler();
        props.onSelect(event);
    }

    return (
        <div className='Select'>
            <div className='Select__input' onClick={openHandler}>
                <span>{itemText}</span>
                <i className={`fa ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}>
                </i>
            </div>

            <div className={`Select__dropdown ${open ? 'open' : ''}`}>
                <ul className="Select__list" onClick={selectHandler}>
                    {props.options.map((option, index) => {
                        return (
                            <li className='Select__item' value={option.value} key={index}>{option.text}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Select;
