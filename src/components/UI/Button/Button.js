import React from 'react';
import './Button.css';

export const Button = (props) => {
    return (
        <button className={`Button ${props.className ? props.className : ''}`} {...props}>
            <span className="button__line button__line--top"/>
            <span className="button__line button__line--right"/>
            <span className="button__line button__line--bottom"/>
            <span className="button__line button__line--left"/>
            <span>{props.children}</span>
        </button>
    );
};

