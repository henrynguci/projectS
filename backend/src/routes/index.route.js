import { Router } from "express";
import documentRoute from "./document.route.js";
import feedbackRoute from "./feedback.route.js";


const router = Router();

const route = (app) => {
    router.use('/documents', documentRoute);
    router.use('/feedbacks', feedbackRoute);

    return app.use('/api/v1', router);
}

export default route;