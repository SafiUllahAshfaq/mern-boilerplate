import { Form, Input, Button, Radio, DatePicker, InputNumber, TreeSelect, Switch, Typography, Table, Empty, Pagination, Tag, } from 'antd';
import '../index.css';
import react, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import table from 'antd/lib/table';
import { count } from 'console';
import { borderBottom } from '@mui/system';
// import Search from 'antd/lib/transfer/search';
const { Search } = Input;



interface IScheduleData {

    submitSch: { count: number, rows: any[] }, getDef: any
}


export const PrintSch = () => {
    const [rowData, setRowsData] = useState<IScheduleData>({ submitSch: { count: 0, rows: [] }, getDef: {} })


    // const [state, setState] = useState({rowData: { count: 0, rows: [] }, colData: {}, thre: {}})
    const navigate = useNavigate();
    const onSearch = (value: string) => {
        // console.log('Success:', value);
        // console.log('Env variables: ', process.env);
        // axios.post(process.env.REACT_APP_API_URL + '/printSch', { sno: value })
        axios.get<IScheduleData>(process.env.REACT_APP_API_URL + '/printSch' + `?sno=${value}`)
            .then((res) => {
                console.log({ res });
                setRowsData(res.data);
                // setRowData(res.data.getDef);
                // navigate(ROUTES.dashboard);
                // console.log('Success2:', value);
            })
            .catch((err) => {
                console.error({ err });
            });
    };

    const columns = [
        {
            title: 'S/No',
            key: 'index',
            render: (_text: any, _record: any, index: any) => index + 1

        },
        {
            title: 'Cheque No',
            dataIndex: 'chqno',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Payee Name',
            dataIndex: 'payeename',
        },
        {
            title: 'Payment Head',
            dataIndex: 'paymenthead',
        },
        {
            title: 'Object Code',
            dataIndex: 'objectcode',
        },
        {
            title: 'Project',
            dataIndex: 'project',
        },
        {
            title: 'Payment Head',
            dataIndex: 'phead',
        },
        {
            title: 'Office',
            dataIndex: 'poffice',
        },
    ];




    console.log('totalTaxes');

    var today = new Date(),

        curdate = today.getDate() + '-' + today.toLocaleString('default', { month: 'long' }) + '-' + today.getFullYear();


    return (
        <>


            <Typography.Title level={3}>Schedule of Assigntment Account Cheque</Typography.Title>
            {/* <pre> {JSON.stringify(rowData.submitSch.rows[1].amount} </pre> */}

            <Search className='no-printme' placeholder="input Schedule No " name='schno' id='schno' onSearch={onSearch} style={{ width: 200 }} />
            <table style={{ textAlign: 'left', }}>
                <tr style={{ borderBottom: '1px solid black' }}>
                    <td><pre>   DDO : {(rowData.getDef.ddo)} Department :  {(rowData.getDef.deptname)} </pre>
                    </td></tr>
                <tr style={{ borderBottom: '1px solid black' }}>
                    <td><pre>   Project Description : {(rowData.getDef.pdescription)}  Project Code:  {(rowData.getDef.pcode)} </pre>
                    </td></tr>
                <tr style={{ borderBottom: '1px solid black' }}><td><pre>   Assignment Account {(rowData.getDef.assaccount)} Cost Center {(rowData.getDef.costcenter)} </pre>
                </td></tr>
                <tr style={{ borderBottom: '1px solid black' }}><td><pre>   Grant No :  {(rowData.getDef.grantno)}  Date:   {curdate} </pre>
                </td>
                </tr>

            </table>

            {/* <Form.Item wrapperCol={{ offset: 0, span: 22 }}>

                <Form.Item label="Enter Schedule No" name='schno'>
                    <Input />
                    <Button type='ghost' htmlType='submit' onClick={onSearch}>
                        Load Schedule
                    </Button>
                </Form.Item>

            </Form.Item> */}


            <div id='prt' className='printme'>


                <Table columns={columns} dataSource={rowData.submitSch.rows} rowKey={'id'} size="small" pagination={false} />
                <Button className='no-printme' type='ghost' htmlType='submit' onClick={() => window.print()} >
                    Print...
                </Button>
            </div>

            <div>
                <br></br>

                <table style={{ textAlign: 'left', borderColor: 'black', borderStyle: 'groove' }}>

                    <tr >
                        <td>
                            <pre>Total Amount of the Schedule is </pre>
                            <pre>Department :  { } </pre>
                        </td>
                    </tr>
                </table>
                <br></br>
                <p> Signature DDO </p>
            </div>


            {/* <h1 className="no-printme"> do not print this </h1>
            <div className='printme'>
                Print this only
            </div>
            <button className='no-printme' onClick={() => window.print()} >Print only the above div</button> */}



        </>
    );
};
function amount(amount: any): any {
    throw new Error('Function not implemented.');
}

