import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';

// import { db } from './db';
import { User } from './models/user';

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

app.post('/subm', (req, res) => {
    console.log({ body: req.body });

    res.json({ message: 'Login logic is not implemented' });
});

app.post('/Sdefine', (req, res) => {
    console.log({ body: req.body });

    res.json({ message: 'Login logic is not implemented' });

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