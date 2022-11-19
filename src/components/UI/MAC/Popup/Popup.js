import React from 'react';
import './Popup.css';

export const Popup = ({stateFx, state, ...props}) => {
    return (
        <div>
            <div className={`Popup ${state ? 'open' : ''}`} onClick={e => e.stopPropagation()} ref={props.addRef}>
                <div className="popup_header">
                    <div className="popup_header__circles">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <div className="popup_header__title">
                    <span>
                       {props.title || 'undefined'}
                    </span>
                    </div>
                    <div className="popup_header_cross" onClick={() => stateFx(false)}>
                        <i className='fa fa-times'/>
                    </div>
                </div>
                <div className="popup_content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};


