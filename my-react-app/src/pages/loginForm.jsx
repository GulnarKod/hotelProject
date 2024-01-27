import React, { useState } from 'react';
import "../scss/main.css";
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {login} from "../slice/authSlice";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const error=useSelector(state=>state.auth.error);
  const isLogedIn=useSelector(state=>state.auth.isLogedIn);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  }
  const navigate = useNavigate();
  if (isLogedIn) {
    console.log('ok');
  navigate(-1);
  return null;
}
// const onFinish = (values) => {
//   console.log('Success:', values);
const onFinishFailed = (error) => {
  console.log('Failed:', error);
};

  return (

    <Form 
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
    
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={navigate}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
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
        value={checked}
        onChange={(e) => setChecked(e.target.value)}

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
  )
};

export default LoginForm;