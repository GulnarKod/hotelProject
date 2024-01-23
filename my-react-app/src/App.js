import React from 'react';
import LoginForm from './pages/loginForm'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home'
const App = () =>{
  return(
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/loginForm' element={<LoginForm/>}/>
    </Routes>
  )
}
  
export default App;