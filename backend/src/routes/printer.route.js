import { Router } from 'express';
import * as printerController  from '../controllers/printer.controller.js';

const route = Router()

route.post('/add', printerController.addPrinter)
route.get('/get-all', printerController.getPrinters)
route.post('/change-state', printerController.changeState)

export default route;