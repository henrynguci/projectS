import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';

const route = Router()

// route.post('/signup', authController.signup)
route.post('/signin', authController.signin)

export default route