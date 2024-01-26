import React from "react";
import "../scss/main.css"
import logo from '../logo/logo.png'
import {Navigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import{logoutUser} from '../slice/authSlice';
import useAuth from '../hooks/use-auth'
import { Layout,Button, Checkbox,Carousel,Table } from 'antd';

const { Header,  Content } = Layout;
const Homepage=()=>{

//     const dispatch=useDispatch();
//     const handleLogOut=()=>{
//         dispatch(logoutUser());
//     }
//  const {isAuth}=useAuth();
//  console.log(useAuth());
    // return isAuth? (
     return(  
    <Layout >
      <Header className="header" >
        {/* Header  <button onClick={handleLogOut}>Logout</button> */}
        <div className="logo">
        <img src={logo} alt="loqotip"/>
</div>
<div className="logOutBtn">
<img src="#"alt="users photo"/>
   
        <button className="btn">Log Out</button>
            </div> 
      </Header>
      <Content className="content">
        <div>
        <Button type="text">Clear all filters</Button>
        <Checkbox >Free rooms only</Checkbox>
        </div>
        <Carousel>
      <div>
        
      </div>
      <div>
        <h3 className="caruselElement">2</h3>
      </div>
      <div>
        <h3 className="caruselElement">3</h3>
      </div>
      <div>
        <h3 className="caruselElement">4</h3>
      </div>
    </Carousel>
      </Content>
    </Layout>
       
    // ):(<Navigate to='/loginForm'/>)
     )
}

export default Homepage;