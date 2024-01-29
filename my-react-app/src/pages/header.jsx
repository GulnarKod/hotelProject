import React from "react";
import "../scss/main.css";
import {Navigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {logoutUser}from '../slice/authSlice';
import logo from '../logo/logo.png'
const Header = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logoutUser());
    }
    return(

        <header className="header" >
            
            <div className="logo">
                <img src={logo} alt="loqotip" />
            </div>
            <div className="logOutBtn">
                <img src="#" alt="users photo" />
                <button className="btn" onClick={handleLogOut}>Log Out</button>
            </div>
        </header>
    )
};
export default Header;