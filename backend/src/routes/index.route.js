import { Router } from "express";
import documentRoute from "./document.route.js";
import feedbackRoute from "./feedback.route.js";
import pageOrderRoute from "./pageOrder.route.js";
import printOrderRouter from "./printOrder.route.js";

const router = Router();

const route = (app) => {
    router.use('/documents', documentRoute);
    router.use('/feedbacks', feedbackRoute);
    router.use('/page-orders', pageOrderRoute);
    router.use('/print-orders', printOrderRouter);

    return app.use('/api/v1', router);
}

export default route;