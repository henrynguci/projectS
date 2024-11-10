import { Router } from 'express';
import authRoute from './auth.route.js'
import printerRoute from './printer.route.js'
import notificationRoute from './notification.route.js'

const route = Router();

route.use('/auth', authRoute);
route.use('/printer', printerRoute);
route.use('/notification', notificationRoute);

export default route;
