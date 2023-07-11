import express, { Request, Response } from 'express';
import router from './routes/index';

const PORT = 3002;

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});