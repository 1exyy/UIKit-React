import React from 'react';
import './Loader.css';

export const Loader = ({load}) => {
    return (
        <div className={`loaderContainer ${load ? 'show' : ''}`}>
            <div className="loading">
                <div className="arc"/>
                <div className="arc"/>
                <div className="arc"/>
            </div>
        </div>
    );
};

