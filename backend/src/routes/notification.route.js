import { Router } from 'express';
import * as notificationController  from '../controllers/notification.controller.js';

const route = Router()

route.get('/get/:id', notificationController.getNotify)
route.post('/view', notificationController.viewNotify)
route.delete('/delete', notificationController.deleteNotify)

export default route;