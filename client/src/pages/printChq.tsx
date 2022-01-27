import { Input, Button, Typography, } from 'antd';
import '../index.css';
import './chqprint.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Search from 'antd/lib/transfer/search';
var converter = require('number-to-words');
const { Search } = Input;

// let newDate = new Date();

interface IScheduleData {

    submitSch: { count: number, rows: any[] }, getDef: any
}

interface ICheque {
    details: {
        id: number,
        chqno: string,
        amount: number,
        payeename: string,
        paymenthead: string,
        objectcode: string,
        project: string,
        phead: string,
        poffice: string,
        createdon: string,
        sno: string,
    },
    assno: string,

}

var today = new Date(),

    curdate = today.getDate() + '-' + today.toLocaleString('default', { month: 'long' }) + '-' + today.getFullYear();
var curdate2 = today.getDate() + '-' + today.toLocaleString('default', { month: 'short' }) + '-' + today.getFullYear();



const Cheque = (props: ICheque) => {

    //  console.log({ props.assignmentno })

    const { chqno, amount, payeename, paymenthead, objectcode, project, phead, poffice, createdon, sno } = props.details;

    return <div className='outerdiv'>

        <div id="main" className='maincss' >
            <div className='datep'>
                {curdate2}
            </div>
            <div className='datem'>
                {curdate}
            </div>
            <div className='payto'>
                {payeename}
            </div>

            <div className='rupees'>

                {/* {converter.toWords(amount).toLocaleUpperCase()} only */}
                {converter.toWords(amount)} only

            </div>
            <div className='rs'>
                {amount}/=
            </div>
            <div className='asgno'>

                {props.assno}
            </div>
            <div className='pbm'>
                Pakistan Bait ul Mal
            </div>
            <div className='pay2p'>
                {payeename}
            </div>
            <div className='rsp'>
                {amount}/=
            </div>
            <div className='cross'>
                Pyaee (A.C) Only
            </div>
            <div className='stamp'>
                Civic Center, Islamabad (0341)            </div>
            <div className='project'>
                {project}
            </div>
            <div className='crossline'>
                ____________________________________
            </div>
        </div>
    </div >
}

export const PrintChq = () => {
    const [rowData, setRowsData] = useState<IScheduleData>({ submitSch: { count: 0, rows: [] }, getDef: {} })


    const Assignmentno = (rowData.getDef.assaccount);
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
        <>

            {/* <h1> skdflas </h1>
            <pre>   Assignment Account {(rowData.getDef.assaccount)} </pre> */}
            {/* <pre> {JSON.stringify(rowData.getDef.deptname)} </pre> */}
            {/* <pre> {JSON.stringify(rowData.submitSch.rows[0])} </pre> */}

            {/* <pre> {JSON.stringify(rowData.submitSch.rows[0]?.id)} </pre> */}
            {/* {rowData.submitSch.rows[0] ? <pre> {JSON.stringify(rowData.submitSch.rows[0]?.id)} </pre> : null} */}

            {/* <pre> this is  </pre> */}
            <br />
            <br />
            <Typography.Title level={3} className='no-printme'>Print Account Cheque</Typography.Title>
            <Search className='no-printme' title='Enter Schedule No to Fetch Cheques' placeholder="input Schedule No " name='schno' id='schno' onSearch={onSearch} style={{ width: 200 }} />



            <br />
            <br />
            <div id='prt' className='printme'>

                {/* <Table columns={columns} dataSource={rowData.submitSch.rows} rowKey={'id'} size="small" className='no-printme' /> */}
                <Button className='no-printme' type='ghost' htmlType='submit' onClick={() => window.print()} >
                    Press to Print
                </Button>
            </div>

            {

                rowData.submitSch.rows.map((record) => {
                    return <
                        Cheque key={record.id}
                        details={record} assno={rowData.getDef.assaccount}

                    //   { <pre> {JSON.stringify(rowData.getDef.deptname)} </pre> }
                    // id={id}

                    // chqno={chqno}
                    // amount={amount}
                    // payeename={payeename}
                    // paymenthead={paymenthead}
                    // objectcode={objectcode}
                    // project={project}
                    // phead={phead}
                    // poffice={poffice}
                    // createdon={createdon}
                    // sno={sno}
                    />

                })
            }
            {/* <div id="main" className='maincss'  >
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
            </div> */}





        </>
    );
};
