import { Router } from "express";
import testController from "../controllers/testController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { query, param, } from 'express-validator'
import isAdminMiddleware from "../middlewares/isAdminMiddleware.js";
import rateLimitMiddleware from "../middlewares/rateLimitMiddleware.js";

const testRouter = Router();

// endpoint - /api/v1/tests
testRouter.get('/err', authMiddleware, rateLimitMiddleware, testController.err);
testRouter.get('/auth', authMiddleware, isAdminMiddleware, testController.auth);
testRouter.get('/query', testController.query);
testRouter.get('/express-validator', [query('name').notEmpty(), param('id').notEmpty()], testController.expressValidator);



export default testRouter;