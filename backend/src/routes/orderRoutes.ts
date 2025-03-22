import { Router } from 'express';
import createOrder from '../controllers/orderController';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

router.post('/order', validateOrder, createOrder);

export default router;
