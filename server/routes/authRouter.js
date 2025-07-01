import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = Router();

// endpoint - /api/v1/auth

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/userInfo', authMiddleware, authController.userInfo);

export default authRouter;
