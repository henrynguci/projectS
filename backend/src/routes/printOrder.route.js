import { Router } from "express";
import * as authMiddleware from '../middlewares/auth.middleware.js';
import * as printOrderController from "../controllers/printOrder.controller.js";
const route = Router();


route.get('/get', authMiddleware.userPermission, printOrderController.getPrintOrdersByUserid)
route.get('/:id', printOrderController.getPrintOrderById);
route.get('/', printOrderController.getAllPrintOrders);
route.get('/filter', printOrderController.filter);
route.put('/:id', printOrderController.changeState);
route.post('/', printOrderController.addPrintOrder);
route.delete('/:id', printOrderController.deletePrintOrder);
export default route;