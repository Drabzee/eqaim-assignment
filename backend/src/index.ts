import express, { NextFunction, Request, Response } from 'express';
import router from './routes/index';
import cors from 'cors';
import sequelize, { dbInit } from './helpers/db';

const PORT = 3000;

const app = express();

// Body parser middleware
app.use(express.json());

// CORS middleware
app.use(cors());

// App Routes
app.use('/api/v1', router);

// Global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    
    return res.json({
        success: false,
        errorThrown: 'Something went wrong!'
    });
});

// Connect DB and start server
sequelize.sync().then(() => {
    console.log("Connection has been established successfully.");
    return dbInit();
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}).catch((error) => {
    console.error("Unable to connect to the database:", error);
});