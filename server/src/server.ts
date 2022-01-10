import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';

// import { db } from './db';
import { User } from './models/user';
import { Sdefine } from './models/sdefine'
import { SubmitSchedule } from './models/submit';


// console.log({ env: process.env });

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', async (req, res) => {

    const users = await User.findAll();
    res.json(users)
})
// app.use(bodyParser.jason());
app.post('/login', async (req, res) => {
    console.log({ body: req.body });
    const { username: fullName, password } = req.body;
    const user = await User.findOne({
        where: { fullName }
    })
    if (!user || user.getDataValue('password') != password) {
        return res.json({ message: 'Invalid Try again', success: false })
    }

    return res.json({ message: " login Successfull", success: true })


    // const user = new User({ fullName, password })
    // await user.save();
    // const user = await User.create({ fullName, password })

    // db.connect( (err:any) => {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "insert into accounts  (username, password,email) values (?,?,?)";
    //     db.query(sql, [username, password,'dad@gmail.com'], (err:any, result:any ) => {
    //       if (err) throw err;
    //       console.log("1 record inserted");

    //     }); 
    // });
    res.json(user);
});

app.post('/subm', async (req, res) => {
    console.log({ body: req.body });

    const { sno, chqno, amount, payeename, paymenthead, objectcode, project, phead, poffice, sdate: createdon } = req.body;
    const SubmitSch = await SubmitSchedule.create({ chqno, amount, payeename, paymenthead, objectcode, project, phead, poffice, createdon, sno })

    res.json({ SubmitSch });
});

app.post('/Sdefine', async (req, res) => {
    console.log({ body: req.body });
    const { dptname: deptname, ddo, projectd: pdescription, pcode, aat: assaccount, costcenter, grantno, poffice: office, sdate: createdon } = req.body;
    // const define = new Sdefine({ dptname, ddo, projectd, pcode, aat, costcenter, grantno, poffice, sdate })

    const define = await Sdefine.create({ deptname, ddo, pdescription, pcode, assaccount, costcenter, grantno, office, createdon })
    // await define.save();


    res.json({ define });

});


app.get('/health', (req, res) => {
    res.send('Server is healthy and running 🟢!');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/login', (req, res) => {
    res.send('this is login page area');
});

process.on('uncaughtException', (e) => {
    console.log(e);

}) 