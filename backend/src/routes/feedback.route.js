import { Router } from "express";
import * as feedbackController from "../controllers/feedback.controller.js"

const router = Router();


router.delete('/:id', feedbackController.deleteFeedback);
router.get('/:id', feedbackController.getFeedbackById);
router.post('/', feedbackController.addFeedback);
router.get('/', feedbackController.getAllFeedBack);
export default router;