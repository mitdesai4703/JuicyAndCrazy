import express from "express"
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderStripe,
  updateOrderStatus,
  markOrderAsPaid,
  deleteOrder,
} from '../controllers/orderController.js';
import authUser from '../middlewares/authUser.js';
import authSeller from '../middlewares/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);
orderRouter.get('/user', authUser, getUserOrders);
orderRouter.get('/seller', authSeller, getAllOrders);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.put('/update-status/:orderId', authSeller, updateOrderStatus);
orderRouter.put('/mark-paid/:orderId', authSeller, markOrderAsPaid);
orderRouter.delete('/delete/:orderId', authSeller, deleteOrder);

export default orderRouter;
