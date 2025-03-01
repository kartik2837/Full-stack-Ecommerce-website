import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRezarpay, AllOrder, userOrder, updateStatus, verifyStripe, verifyRazorpay } from '../controllers/ordercontroller.js';
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js';
const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, AllOrder)
orderRouter.post('/status', adminAuth, updateStatus)

//payment
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRezarpay)


// user
orderRouter.post('/userorder', authUser, userOrder)

// stripe verify
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


export default orderRouter
