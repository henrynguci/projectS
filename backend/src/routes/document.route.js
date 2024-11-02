import { Router } from "express";
import * as documentController from "../controllers/document.controller.js";

const router = Router();

router.put('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);
router.get('/:id', documentController.getDocumentById);
router.post('/', documentController.addDocument);
router.get('/', documentController.getDocuments);
export default router;