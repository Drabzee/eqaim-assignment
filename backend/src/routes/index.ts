import express from 'express'
import { calculateStepsSum, fetchAllStepsSum } from '../controllers';

const router = express.Router();

router.get('/steps-sum', fetchAllStepsSum);

router.post('/steps-sum', calculateStepsSum);

export default router;