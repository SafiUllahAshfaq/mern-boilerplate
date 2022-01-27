import { Form, Input, Button, Radio, DatePicker, InputNumber, TreeSelect, Switch, Typography, Table, Empty, Pagination, Tag, } from 'antd';
import '../index.css';
import react, { useMemo, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import table from 'antd/lib/table';
import { count } from 'console';
import { borderBottom } from '@mui/system';
import { Excel } from 'antd-table-saveas-excel';
import { FileExcelTwoTone, PrinterTwoTone } from '@ant-design/icons';
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
        // {
        //     title: 'S/No',
        //     key: 'index',
        //     render: (_text: any, _record: any, index: any) => index + 1

        // },
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
            classname: 'no-printme',

        },
        {
            classname: 'no-printme',
            title: 'Payment Head',
            dataIndex: 'phead',
        },
        {
            CSS: { className: 'no-printme' },
            title: 'Office',
            dataIndex: 'poffice',

        },
    ];

    const total = useMemo(() => {
        return rowData.submitSch.rows.reduce((a, b) => {
            return { amount: a.amount + b.amount };
        }, { amount: 0 }).amount
    }, [rowData])



    var today = new Date(),

        curdate = today.getDate() + '-' + today.toLocaleString('default', { month: 'long' }) + '-' + today.getFullYear();


    return (
        <>

            <br />
            <Typography.Title level={3}>Schedule of Assigntment Account Cheque</Typography.Title>
            {/* <pre> {JSON.stringify(rowData.submitSch.rows[1].amount} </pre> */}

            <Search className='no-printme' placeholder="input Schedule No " name='schno' id='schno' onSearch={onSearch} style={{ width: 200 }} />
            <Button title='Print' icon={<PrinterTwoTone />} className='no-printme' shape='round' htmlType='submit' onClick={() => window.print()}  >
                Print Schedule
            </Button>

            <Button shape='round' icon={<FileExcelTwoTone />}
                style={{
                    marginBottom: 20,
                }}
                onClick={() => {
                    const excel = new Excel();
                    excel
                        .addSheet('test')
                        .addColumns(columns)
                        .addDataSource(rowData.submitSch.rows, {
                            str2Percent: true,
                        })
                        .saveAs('Schedule.xlsx');
                }}
            >
                Export
            </Button>


            <table style={{ textAlign: 'left', }}>
                <tbody>
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
                </tbody>
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

                {/* <Button title='Print' color='red' className='no-printme' shape='round' htmlType='submit' onClick={() => window.print()} style={{ background: '#008ae6', borderColor: "yellow" }} > */}

            </div>

            <div>
                <br></br>

                <table style={{ textAlign: 'left', borderColor: 'black', borderStyle: 'groove' }}>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid black' }} >
                            <td>
                                <pre>Certificate:
                                    It is certified that money being drawn through above Cheques is required for immediate disbursment and will not be kept in any bank account.    </pre>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid black' }} >
                            <td colSpan={3}>
                                <pre>Summary of Schedule to be charged to Relavant Head of Account  </pre>

                            </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid black' }} >
                            <td> Schedule NO.
                            </td>
                            <td> Head Of Account </td>
                            <td> Rs.  </td>
                        </tr>

                        <tr style={{ borderBottom: '1px solid black' }} >
                            <td>
                                {/* {rowData.submitSch.rows['sno'][0] } */}
                            </td>
                            <td> A05270 </td>
                            <td> {total} </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid black' }} >
                            <td>  ...
                            </td>
                            <td> Total </td>
                            <td> {total}</td>
                        </tr>
                    </tbody>
                </table>

                <br></br>

                <p> Signature DDO </p>
            </div>




        </>
    );
};
function amount(amount: any): any {
    throw new Error('Function not implemented.');
}

