import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authuser from '../middleware/auth.js'

const orderRouter = express.Router();

//Routes for admin
orderRouter.post('/list', adminAuth,allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

//payment features
orderRouter.post('/place',authuser,placeOrder);
orderRouter.post('/stripe',authuser,placeOrderStripe);
orderRouter.post('/razorpay',authuser,placeOrderRazorPay);

//user featuer
orderRouter.post('/userorders',authuser,userOrders)

export default orderRouter;