import { Router } from "express";
import testController from "../controllers/testController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { query, param, } from 'express-validator'

const testRouter = Router();

// endpoint - /api/v1/tests
testRouter.get('/err', testController.err);
testRouter.get('/auth', authMiddleware, testController.auth);
testRouter.get('/query', testController.query);
testRouter.get('/express-validator', [query('name').notEmpty(), param('id').notEmpty()], testController.expressValidator);



export default testRouter;