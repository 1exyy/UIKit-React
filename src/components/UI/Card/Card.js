import React from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className='Card'>
            <div className="Card__title">
                {props.title}
            </div>
            <div className="Card__content">
                {props.children}
            </div>
        </div>
    );
};

