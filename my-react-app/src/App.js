import React from 'react';
import LoginForm from './pages/loginForm'
import { Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Homepage from './pages/home';
import ErrorPage from './pages/errorPage';
import './firebase/firebase';
const App = () =>{
  return(
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      {/* <Route path='/loginForm' element={<LoginForm/>}/> */}
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </div>
  )
}
  
export default App;