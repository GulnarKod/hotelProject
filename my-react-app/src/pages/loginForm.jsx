import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';


const LoginForm = ({handleClick}) => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  // const[checked,setChecked]=useState(false);
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      value={password}
      onMetaChange={(e)=>setPassword(e.target.value)}
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
      valuePropName='checked'
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
      <Button type="primary" htmlType="submit" onClick={handleClick}>
        Submit 
      </Button>
    </Form.Item>
  </Form>
)};
export default LoginForm;