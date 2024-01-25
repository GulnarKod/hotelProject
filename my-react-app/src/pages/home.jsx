import React from "react";
import {Navigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import{logoutUser} from '../slice/authSlice';
import useAuth from '../hooks/use-auth'
const Homepage=()=>{
    const dispatch=useDispatch();
    const handleLogOut=()=>{
        dispatch(logoutUser());}
 const {isAuth}=useAuth();
    return isAuth? (
       
        <div>
            <button onClick={handleLogOut}>Logout</button>
            
        </div>
       
    ):(<Navigate to='/loginForm' />)
}
// import { Layout, Flex } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#4096ff',
// };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#0958d9',
// };
// const siderStyle = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#1677ff',
// };
// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#4096ff',
// };
// const layoutStyle = {
//   borderRadius: 8,
//   overflow: 'hidden',
//   width: 'calc(50% - 8px)',
//   maxWidth: 'calc(50% - 8px)',
// };
// const App = () => (
//   <Flex gap="middle" wrap="wrap">
//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Content style={contentStyle}>Content</Content>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Layout>
//         <Sider width="25%" style={siderStyle}>
//           Sider
//         </Sider>
//         <Content style={contentStyle}>Content</Content>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Header style={headerStyle}>Header</Header>
//       <Layout>
//         <Content style={contentStyle}>Content</Content>
//         <Sider width="25%" style={siderStyle}>
//           Sider
//         </Sider>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>

//     <Layout style={layoutStyle}>
//       <Sider width="25%" style={siderStyle}>
//         Sider
//       </Sider>
//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Content style={contentStyle}>Content</Content>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>
//     </Layout>
//   </Flex>
// );
// export default App;
export default Homepage;