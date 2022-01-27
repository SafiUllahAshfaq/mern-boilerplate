import { Form, Input, Button, Checkbox, Typography, AutoComplete } from 'antd';
import './login.css';
import './chqprint.css'

import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import { fontSize } from '@mui/system';

export const Login = () => {
  const navigate = useNavigate();
  const [invalidCred, setInvalidCred] = useState(false)

  const onFinish = (values: any) => {
    console.log('Success:', values);

    console.log('Env variables: ', process.env);

    axios
      .post(process.env.REACT_APP_API_URL + '/login', values)
      .then((res) => {
        console.log({ res });
        if (res.data.success) {

          localStorage.setItem('isAuthenticated', 'true')
          navigate(ROUTES.dashboard);
          window.location.reload();

        }
        else { setInvalidCred(true) }
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (


    <>
      <br />
      <br />

      <Content >
        <div style={{ background: 'linear-gradient(-60deg, #055c2f 20%, #1a283d 20% )', textAlign: 'left', paddingLeft: '10px' }}>
          <p style={{ fontSize: '25px', fontWeight: '700px', color: 'white', fontStyle: 'italic' }} >  Pakistan Bait ul Mal</p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Form

          name='loginForm'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'

        >
          <Form.Item
            label=' '
            name='username'

            rules={[{ required: true, message: 'Please input your username!' }]}

          >
            <Input placeholder='Enter User Name' />
          </Form.Item>

          <Form.Item
            label=' '
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Enter Your Password' />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 10, span: 5 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {invalidCred && < Typography.Title type='danger' level={5}>Invalid Password</Typography.Title>}


          <Form.Item wrapperCol={{ offset: 10, span: 5 }}>
            <Button type='ghost' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Content >
    </>
  );
};
