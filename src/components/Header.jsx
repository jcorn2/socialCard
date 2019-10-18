import React from 'react';
import Baby from '../../node_modules/@fortawesome/fontawesome-free/svgs/solid/baby.svg';
import DownCaret from '../../node_modules/@fortawesome/fontawesome-free/svgs/solid/caret-down.svg';
import "./Header.css";

function Header(props) {
    return (
        <div className="Header">
            <img src={Baby} height="40" width="40" alt="user icon" />
            <div className="Header-User-Info">
                <span>{props.name}</span>
                <span>{props.userName}</span>
            </div>
            <img src={DownCaret} height="40" width="40" alt="down caret icon" />
        </div>
    );
}

export default Header;