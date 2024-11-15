import { Router } from "express";
import * as pageOrderController from "../controllers/pageOrder.controller.js"
const router = Router();

router.get('/my', pageOrderController.getPageOrderByUserid);
router.get('/:id', pageOrderController.getPageOrderById);
router.post('/', pageOrderController.addPageOrder);
router.get('/', pageOrderController.getAllPageOrders);
export default router;