import React from 'react';
import './Popup.css';

const Popup = (props) => {
    const closeHandler = () => {
        props.stateFx(false);
    }

    return (
        <div>
            <div className={`popup_backdrop ${props.state ? 'open' : ''}`} onClick={closeHandler}>
                <div className={`Popup ${props.state ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
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
                        <div className="popup_header_cross" onClick={closeHandler}>
                            <i className='fa fa-times'/>
                        </div>
                    </div>
                    <div className="popup_content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
