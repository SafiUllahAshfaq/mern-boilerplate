  import { Form,Input,Button,Radio,Select,Cascader,DatePicker,InputNumber,TreeSelect,Switch, } from 'antd';
  import '../index.css';
  import react from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { ROUTES } from '../constants';

  export const Sdefine = () => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
      console.log('Success:', values);

      console.log('Env variables: ', process.env);

      axios
        .post(process.env.REACT_APP_API_URL + '/Sdefine', values)
        .then((res) => {
          console.log({ res });

          navigate(ROUTES.dashboard);
        })
        .catch((err) => {
          console.error({ err });
        });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    
    return (
      <> <h2>Define The Schedule </h2>
      <Form
        labelCol={{ span: 4,  }}
        wrapperCol={{span: 14, }}   
        name='sdefine'      
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='on'
      >
        <Form.Item label='Department name' name='dptname' rules={[{ required: true, message: 'Please input Department!' }]} >
          <Input />
        </Form.Item>

        <Form.Item label="DDO Name" name='ddo' rules={[{ required: true, message: 'Please input your DDO Name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Project Description" name='projectd' rules={[{ required: true, message: 'Please input !' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Porject Code" name='pcode'>
          <Select>
            <Select.Option value="pcode1">FC21B01</Select.Option>
            <Select.Option value="pcode2">000000</Select.Option>
            </Select>
        </Form.Item>
        
        
        <Form.Item label="Assignment Account Title" name='aat'>
          <Select>
            <Select.Option value="270326-8/1158995442">270326-8/1158995442</Select.Option>
            <Select.Option value="anyother">.......</Select.Option>
            
          </Select>
        </Form.Item>
        <Form.Item label="Cost Center" name='costcenter'>
          <Select>
            <Select.Option value="cost">IB-9044</Select.Option>
            <Select.Option value="cost2">IB-000</Select.Option>
            
          </Select>
        </Form.Item>
        <Form.Item label="Grant No" name='grantno'>
          <Select>
            <Select.Option value="22">22</Select.Option>
            <Select.Option value="anyother">.......</Select.Option>
            
          </Select>
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
      
        <Form.Item wrapperCol={{ offset: 0, span: 22 }}>
          <Button type='ghost' htmlType='submit'>
            Submit to Save
          </Button>
        </Form.Item>
      </Form>
    
      </>
    );
  };
