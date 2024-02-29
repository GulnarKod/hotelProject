import React, { useState } from 'react';
import "../scss/main.css";
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
const {user,loading, error}= useSelector(state=>state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
   dispatch({ type: 'login', payload: { email, password } });
 };
console.log(user);
  const navigate = useNavigate(-1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  
  

    
  return (
    <div className='form-container'>

      <Form className="antd-form"  
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
        <Form.Item className='antd-form-header'
          label='Authentication:'
        >
        </Form.Item>

        <Form.Item

          label="Username"
          name="email"
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

        <Form.Item style={{width:200}}
          name="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}

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
          <Button style={{ width: 150,alignItems:'center', marginLeft:50, borderRadius:0 }} type="primary" onClick={handleLogin}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default LoginForm;