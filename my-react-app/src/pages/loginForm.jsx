import React, { useState } from 'react';
import "../scss/main.css";
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import userLogin from "../reduxSaga/userAuthSaga";
import{setLoginFailure,setLoginSuccess} from '../slice/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn); 
  const error = useSelector(state => state.error); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password, remember })); 
  }

 if(error){
  return {error}
 }

  if (isLoggedIn) { 
    navigate(-1);
    return null;
  }
  return (
<div klassname='formContainer'>
 
    <Form className="form"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}

    >
      <Form.Item className='formHeaedr'
        label='Authentication:'
        >
      </Form.Item>
      
      <Form.Item
      
        label="Username"
        name="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
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
        value={remember}
        onChange={(e) => setRemember(e.target.value)}

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
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
};

export default LoginForm;