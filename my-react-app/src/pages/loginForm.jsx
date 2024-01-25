import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setUserSuccess } from '../slice/authSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[error, setError]=useState('')
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(setUserSuccess({
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        }));
        setIsLoggedIn(true); // Устанавливаем флаг авторизации в true
      })
      .catch(error => {
        console.error('Login failed:', error);
        setError('Email ili parol vveden nepravilno.Poprobuyte ewe raz');
        setPassword('');
      });
  }
const navigate=useNavigate();
  if (isLoggedIn) {
   return navigate(-1);
  }
  return(

  <Form
    name="basic"
    labelCol={{
      span:8,
    }}
    wrapperCol={{
      span: 10,
    }}
    style={{
      marginTop:50,
      maxWidth: 600,

    }}
    
  >
    {error && <p style={{color:'red'}}>{error}</p>}
    <Form.Item
      label="Username"
      name="username"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
     value={checked}
     onChange={(e)=>setChecked(e.target.value)}
      
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={handleLogin}>
      

        Submit 
      </Button>
    </Form.Item>
  </Form>
)};
export default LoginForm;