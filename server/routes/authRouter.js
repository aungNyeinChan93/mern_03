import { Router } from "express";
import authController from "../controllers/authController.js";

const authRouter = Router();

// endpoint - /api/v1/auth
authRouter.post('/register', authController.register)

export default authRouter;
