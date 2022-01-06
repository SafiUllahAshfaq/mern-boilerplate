import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/user', (req, res) => {
    console.log({ body: req.body });

    res.json({ message: 'Login logic is not implemented' });
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
