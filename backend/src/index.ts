import express, { Request, Response } from 'express';
import router from './routes/index';
import cors from 'cors';
import sequelize from './helpers/db';

const PORT = 3002;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1', router);

sequelize.sync().then(() => {
    console.log("Connection has been established successfully.");

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}).catch((error) => {
    console.error("Unable to connect to the database:", error);
});