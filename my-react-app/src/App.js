import React from 'react';
import LoginForm from './pages/loginForm'
import { Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Homepage from './pages/home';
import ErrorPage from './pages/errorPage';
import './firebase/firebase';
import RoomPage from './pages/roomsPage';
const App = () =>{
  return(
   <div className='container'>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/loginForm' element={<LoginForm/>}/>
      <Route path='/roomPage/:id' element={<RoomPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </div>

  )
}
  
export default App;