import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, Typography, } from 'antd';
import '../index.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

export const Subm = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);

    console.log('Env variables: ', process.env);

    axios
      .post(process.env.REACT_APP_API_URL + '/subm', values)
      .then((res) => {
        console.log({ res });

        navigate(ROUTES.dashboard);
        alert('Record saved! Press to Continue....');
        navigate(ROUTES.subm);

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
      <br />  <Typography.Title level={3}>Prepare Schedule</Typography.Title>

      <Form
        labelCol={{ span: 4, }}
        wrapperCol={{ span: 14, }}
        name='subm'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='on'
      >
        <Form.Item label="Schedule No" name='sno' rules={[{ required: true, message: 'Please input  No!' }]} >
          <Input />
        </Form.Item>
        <Form.Item label="Cheque No" name='chqno' rules={[{ required: true, message: 'Please input Cheque No!' }]} >
          <Input />
        </Form.Item>

        <Form.Item label="Amount" name='amount' rules={[{ required: true, message: 'Please input your Amount!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Payee Name" name='payeename' rules={[{ required: true, message: 'Please input your Name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Payment Head" name='paymenthead'>
          <Input />
        </Form.Item>

        <Form.Item label="Object Code" name='objectcode'>
          <Input />
        </Form.Item>
        <Form.Item label="Project" name='project'>
          <Input />
          {/* <Select>
            <Select.Option value="ifa">IFA</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="csp">CSP</Select.Option>
            <Select.Option value="owsp">OWSP</Select.Option>
          </Select> */}
        </Form.Item>
        <Form.Item label="Payment Head" name='phead'>
          <Input />
          {/* <Select>
            <Select.Option value="ifa">head 123</Select.Option>
            <Select.Option value="admin">Head 234</Select.Option>

          </Select> */}
        </Form.Item>

        <Form.Item label="Office" name='poffice'>
          <Select>
            <Select.Option value="ho">Head Office</Select.Option>
            <Select.Option value="roict">RO ICT</Select.Option>
            <Select.Option value="romultan">RO South Punjab</Select.Option>
            <Select.Option value="popunjab1">PO Punjab-1</Select.Option>
            <Select.Option value="posindh">PO Sindh</Select.Option>
            <Select.Option value="pobalochistan">PO Balochistan</Select.Option>
            <Select.Option value="pogb">PO GB</Select.Option>

          </Select>
        </Form.Item>

        <Form.Item label="Date" name='sdate'>
          <DatePicker />
        </Form.Item>
        {/* <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
        <Form.Item wrapperCol={{ offset: 0, span: 22 }}>
          <Button type='ghost' htmlType='submit'>
            ...Submit ...
          </Button>
        </Form.Item>
      </Form>

    </>
  );
};
