import express, { Request, Response } from 'express'
import { getSumSteps, isPositiveNumeric } from '../utils/number_handler';
import Sum from '../models/Sum';
import sequelize from '../helpers/db';

const router = express.Router();

router.get('/steps-sum', async (req: Request<{}, {}, {}, { page: string, size: string }>, res: Response) => {
    let { page, size } = req.query;

    if (!isPositiveNumeric(page)) page = '1';
    if (!isPositiveNumeric(size)) size = '5';
    
    const sum = Sum(sequelize);

    const sums = await sum.findAll({
        limit: +size,
        offset: +size * (+page - 1),
    });

    return res.json({
        success: true,
        msg: sums,
    });
});

router.post('/steps-sum', (req: Request<{}, {}, { num1: string, num2: string, toSaveInDB: boolean }>, res: Response) => {
    const { num1, num2, toSaveInDB } = req.body;

    if (!(isPositiveNumeric(num1) && isPositiveNumeric(num2))) {
        return res.status(403).json({
            success: false,
            errorThrown: 'Numbers provided should be positive intergers only'
        });
    }

    const stepsSum = getSumSteps(num1, num2);

    if (toSaveInDB) {
        const sum = Sum(sequelize);
        sum.create(stepsSum);
    }

    return res.json({
        success: true,
        data: stepsSum
    });
});

export default router;