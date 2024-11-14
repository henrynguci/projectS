import { Router } from 'express';
import * as authMiddleware from '../middlewares/auth.middleware.js';
import multerUpload from '../middlewares/multer.middleware.js';
import * as uploadController from '../controllers/upload.controller.js';

const route = Router()

route.post('/upload', authMiddleware.userPermission, multerUpload.single('file'), uploadController.upload)

export default route