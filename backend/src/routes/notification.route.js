import { Router } from 'express';
import * as authMiddleware from '../middlewares/auth.middleware.js';
import * as notificationController  from '../controllers/notification.controller.js';

const route = Router()

route.get('/get/', authMiddleware.userPermission, notificationController.getNotify)
route.put('/view', authMiddleware.userPermission, notificationController.viewNotify)
route.delete('/delete', authMiddleware.userPermission, notificationController.deleteNotify)

export default route;