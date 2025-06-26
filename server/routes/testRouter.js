import { Router } from "express";
import testController from "../controllers/testController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const testRouter = Router();

// endpoint - /api/v1/tests
testRouter.get('/err', testController.err);
testRouter.get('/auth', authMiddleware, testController.auth);
testRouter.get('/query', testController.query);

export default testRouter;