import React from "react";
import {Navigate} from 'react-router-dom';
import useAuth from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import {logoutUser}from '../slice/authSlice';
import logo from '../logo/logo.png'
const Header = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logoutUser());
    }
    const { isAuth } = useAuth();
    console.log(useAuth());
    return isAuth ? (
        <Header className="header" >
            
            <div className="logo">
                <img src={logo} alt="loqotip" />
            </div>
            <div className="logOutBtn">
                <img src="#" alt="users photo" />
                <button className="btn" onClick={handleLogOut}>Log Out</button>
            </div>
        </Header>
    ):(<Navigate to='/loginForm'/>)
};
export default Header;