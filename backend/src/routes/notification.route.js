import { Router } from 'express';
import * as notificationController  from '../controllers/notification.controller.js';
import * as authMiddleware from '../middlewares/auth.middleware.js';

const route = Router()

route.get('/get/', authMiddleware.userPermission, notificationController.getNotify)
route.post('/view', authMiddleware.userPermission, notificationController.viewNotify)
route.delete('/delete', authMiddleware.userPermission, notificationController.deleteNotify)

export default route;