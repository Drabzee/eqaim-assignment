import express, { Request, Response } from 'express'
import { getSumSteps, isNumeric } from '../utils/number_handler';

const router = express.Router();

router.get('/step-sums', (req: Request, res: Response) => {
    return res.json({
        success: true,
        msg: 'Hello, world!'
    });
});

router.post('/step-sums', (req: Request<{}, {}, { num1: string, num2: string }>, res: Response) => {
    const { num1, num2 } = req.body;

    if (!(isNumeric(num1) && isNumeric(num2))) {
        return res.status(403).json({
            success: false,
            errorThrown: 'Numbers provided should be positive intergers only'
        });
    }

    return res.json({
        success: true,
        data: getSumSteps(num1, num2)
    });
});

export default router;