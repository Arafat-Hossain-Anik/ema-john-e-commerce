import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <img className="header-logo" src={logo} alt="" />
            <nav className="nav-link-container">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Reveiw</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
            </nav>
        </div>
    );
};

export default Header;