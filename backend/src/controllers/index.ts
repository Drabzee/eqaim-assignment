import { NextFunction, Request, Response } from "express";
import { getSumSteps, isPositiveNumeric } from "../utils/number_handler";
import sequelize from "../helpers/db";
import { Sum } from "../models/Sum";

export const fetchAllStepsSum = async (req: Request<{}, {}, {}, { page?: string, size?: string }>, res: Response, next: NextFunction) => {
    try {
        let { page, size } = req.query;
    
        if (page === undefined || !isPositiveNumeric(page)) page = '1';
        if (size === undefined || !isPositiveNumeric(size)) size = '5';
    
        const sums = await Sum.findAll({
            limit: +size,
            offset: +size * (+page - 1),
        });
    
        return res.json({
            success: true,
            msg: sums,
        });
    } catch (err) {
        next(err);
    }
}

export const calculateStepsSum = async (req: Request<{}, {}, { num1: string, num2: string, toSaveInDB: boolean }>, res: Response, next: NextFunction) => {
    try {
        const { num1, num2, toSaveInDB } = req.body;
    
        if (!(isPositiveNumeric(num1) && isPositiveNumeric(num2))) {
            return res.status(403).json({
                success: false,
                errorThrown: 'Numbers provided should be positive intergers only'
            });
        }
    
        const stepsSum = getSumSteps(num1, num2);
    
        if (toSaveInDB) {
            Sum.create(stepsSum);
        }
    
        return res.json({
            success: true,
            data: stepsSum
        });
    } catch(err) {
        next(err);
    }
}