import { Router } from "express";
import * as pageOrderController from "../controllers/pageOrder.controller.js"
const router = Router();

router.delete('/:id', pageOrderController.deletePageOrder);
router.get('/:id', pageOrderController.getPageOrderById);
router.post('/', pageOrderController.addPageOrder);
router.get('/', pageOrderController.getAllPageOrders);
export default router;