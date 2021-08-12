import React, { useState } from 'react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [menuClass, setMenuClass] = useState("burgerMenu hide");

    const toggleMenu = () => {
        if (isOpen) {
            setMenuClass("burgerMenu hide");
            setOpen(!isOpen);
        } else {
            setMenuClass("burgerMenu");
            setOpen(!isOpen);
        }
    }

    return (
        <header>
            <div className="menu-btn" onClick={toggleMenu}>
                <div className="menu-btn-burger"></div>
            </div>
            <h1 className="logo">EXP|CON</h1>
            <div className={menuClass}>
                <ul>
                    <li>WHAT IS IT</li>
                    <li>PERKS</li>
                    <li>PRICING</li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;