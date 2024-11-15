import { Router } from "express";
import * as printOrderController from "../controllers/printOrder.controller.js";
const router = Router();

router.get('/my', printOrderController.getPrintOrderByUserid)
router.put('/:id', printOrderController.changeState);
router.delete('/:id', printOrderController.deletePrintOrder);
router.get('/:id', printOrderController.getPrintOrderById);
router.post('/', printOrderController.addPrintOrder);
router.get('/', printOrderController.getAllPrintOrders);
export default router;