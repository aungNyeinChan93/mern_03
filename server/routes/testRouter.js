import { Router } from "express";
import testController from "../controllers/testController.js";

const testRouter = Router();

// endpoint - /api/v1/tests
testRouter.get('/err', testController.err);

export default testRouter;