import { Form, Input, Button, Checkbox, Typography } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

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


    <> <h2> Pakistan Bait ul Mal </h2>


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
    </>
  );
};
