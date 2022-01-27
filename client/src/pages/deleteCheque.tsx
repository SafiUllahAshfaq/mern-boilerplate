import { Form, Input, Button, Radio, DatePicker, Select, TreeSelect, Switch, Typography, Table } from 'antd';
import '../index.css';
import react, { useEffect, useState } from 'react';
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

export const DeleteCheque = () => {
    const navigate = useNavigate();
    const [rowData, setRowsData] = useState<IScheduleData>({ submitSch: { count: 0, rows: [] }, getDef: {} })

    const [searchSno, setsearchSno] = useState('');
    const [searchChqno, setsearchChqno] = useState('');
    // const [searchText, setSearchtext] = useState({ sno: '', chqno: '' })
    // const searchHandaler = (value: string) => {
    //     setSearchtext({ ...searchText, [value.target.sno]: value.target.sno, [value.target.chqno]: value.target.chqno });
    // }

    const searchCheque = () => {

        console.log('inside usereffect ', searchChqno, searchSno);
        axios.get<IScheduleData>(process.env.REACT_APP_API_URL + '/deleteCheque' + `?sno=${searchSno}&sno2=${searchChqno}`)
            .then((res) => {
                console.log({ res });
                setRowsData(res.data);

            })
            .catch((err) => {
                console.error({ err });
            });
    }

    const searchHandaler = () => {
        // return false;
        searchCheque();
        // setsearchSno('');
        // setsearchChqno('');
    }


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


    var today = new Date(),
        curdate = today.getDate() + '-' + today.toLocaleString('default', { month: 'long' }) + '-' + today.getFullYear();
    return (
        <>
            <br /> <Typography.Title level={3}>Delete Cheque </Typography.Title>
            {/* <pre> {JSON.stringify(rowData.submitSch.rows[1].amount} </pre> */}

            {/* <Search className='no-printme' placeholder="input Schedule No " name='schno' id='schno' onSearch={searchHandaler} style={{ width: 200 }} /> */}
            <div id='prt' className='printme'>



                <form>



                    <Input id='chqno'
                        onChange={(e) => setsearchSno(e.target.value)}
                        className="site-input-right"
                        style={{
                            width: 150,
                            textAlign: 'center',
                        }}
                        placeholder="Enter Schedule No"
                    />
                    <Input id='chqno'
                        onChange={(e) => setsearchChqno(e.target.value)}
                        className="site-input-right"
                        style={{
                            width: 150,
                            textAlign: 'center',
                        }}
                        placeholder="Enter Cheque No"
                    />
                    <Button className='no-printme' type='ghost' onClick={() => searchCheque()}  >
                        Delete Cheque
                    </Button>
                    <Button className='no-printme' type='ghost' htmlType='submit' onClick={() => window.print()} >
                        Print...
                    </Button>
                </form>

            </div>
            <Table columns={columns} dataSource={rowData.submitSch.rows} rowKey={'id'} size="small" />
        </>
    );
};
function amount(amount: any): any {
    throw new Error('Function not implemented.');
}

function value(value: any): void {
    throw new Error('Function not implemented.');
}

