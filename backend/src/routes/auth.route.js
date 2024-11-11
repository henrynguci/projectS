import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';

const route = Router()

// route.post('/signup', authController.signup)
route.post('/signin', authController.signin)
route.post('/signout', authController.signout)

import * as auth from '../middlewares/auth.middleware.js';
route.post('/check-signin', auth.spsoPermission)

export default route