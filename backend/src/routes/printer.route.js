import { Router } from 'express';
import * as authMiddleware from '../middlewares/auth.middleware.js';
import * as printerController  from '../controllers/printer.controller.js';

const route = Router()

route.post('/add', authMiddleware.spsoPermission, printerController.addPrinter)
route.get('/get-all', printerController.getPrinters)
route.post('/change-state', authMiddleware.spsoPermission, printerController.changeState)
route.put('/update', authMiddleware.spsoPermission, printerController.updateInfo)

export default route;