import { Form, Input, Button, Radio, DatePicker, InputNumber, TreeSelect, Switch, Typography, Table, Empty, Pagination, Tag, } from 'antd';
import '../index.css';
import './chqprint.css'
import react, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import table from 'antd/lib/table';
import { count } from 'console';
// import Search from 'antd/lib/transfer/search';
const { Search } = Input;

interface IScheduleData {
    submitSch: { count: number, rows: any[] }, getDef: any
}


export const PrintChq = () => {
    const [rowData, setRowsData] = useState<IScheduleData>({ submitSch: { count: 0, rows: [] }, getDef: {} })


    // const [state, setState] = useState({rowData: { count: 0, rows: [] }, colData: {}, thre: {}})
    const navigate = useNavigate();
    const onSearch = (value: string) => {
        console.log('Success:', value);

        console.log('Env variables: ', process.env);

        // axios.post(process.env.REACT_APP_API_URL + '/printSch', { sno: value })
        axios.get<IScheduleData>(process.env.REACT_APP_API_URL + '/printSch' + `?sno=${value}`)

            .then((res) => {
                console.log({ res });
                setRowsData(res.data);
                // setRowData(res.data.getDef);

                // navigate(ROUTES.dashboard);
                console.log('Success2:', value);
            })
            .catch((err) => {
                console.error({ err });
            });
    };

    const columns = [

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


    return (
        <>     <Typography.Title level={3} className='no-printme'>Print Account Cheque</Typography.Title>

            <pre> {JSON.stringify(rowData.getDef.id)} </pre>

            <Search className='no-printme' placeholder="input Schedule No " name='schno' id='schno' onSearch={onSearch} style={{ width: 200 }} />

            <div id='prt' className='printme'>

                <Table columns={columns} dataSource={rowData.submitSch.rows} rowKey={'id'} size="small" className='no-printme' />
                <Button className='no-printme' type='ghost' htmlType='submit' onClick={() => window.print()} >
                    Print...
                </Button>
            </div>

            <div id="main" className='maincss'  >
                <div className='datep'>
                    02-02-2022
                </div>
                <div className='datem'>
                    01-02-2022
                </div>
                <div className='payto'>
                    Gulzar Bibi 611261262162212
                </div>

                <div className='rupees'>
                    Twenty Five Thousand
                </div>
                <div className='rs'>
                    25000/-
                </div>
                <div className='asgno'>
                    270326-8/158995442
                </div>
                <div className='pbm'>
                    Pakistan Bait ul Mal
                </div>
                <div className='pay2p'>
                    Gulzar Bibi 611261262162212
                </div>
                <div className='rsp'>
                    25000/-
                </div>
            </div>





        </>
    );
};
