import React, {useState} from 'react';
import useOutside from "../../../hooks/useOutside.hook";

import './Select.css';

export const Select = ({onSelect, placeholder, ...props}) => {
    const {ref, isShow, setIsShow} = useOutside(false);
    const [itemText, setItemText] = useState(placeholder || '');

    const selectHandler = (event) => {
        setItemText(event.target.innerText)
        setIsShow(false);
        onSelect(event);
    }

    return (
        <div className='Select' ref={ref}>
            <div className='Select__input' onClick={()=>{setIsShow(!isShow)}}>
                <span>{itemText}</span>
                <i className={`fa ${isShow ? 'fa-chevron-up' : 'fa-chevron-down'}`}>
                </i>
            </div>

            <div className={`Select__dropdown ${isShow ? 'open' : ''}`}>
                <ul className="Select__list" onClick={selectHandler}>
                    {props.options.map((option, index) => {
                        return (
                            <li className='Select__item' data-value={option.value} key={index}>{option.text}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

