import { Model } from "mongoose";
import UserModel from "../models/userModel.js";
import { JWT } from "../utils/helper.js";

const authController = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const user = await UserModel.register(name, email, password);
            const token = user && await JWT.generateToken({ _id: user._id });

            user && token && res.status(201).json({
                success: true,
                message: 'Register Success',
                result: { ...user, token }
            })
        } catch (error) {
            return next(error)
        }
    },
    // domain/api/v1/auth/login
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            if (!email, !password) {
                res.status(400);
                return next(new Error('Some Fields are required!'))
            }
            const authUser = (email && password) && await UserModel.login(email, password);
            const token = authUser && await JWT.generateToken({ _id: authUser._id });
            const user = authUser && await UserModel.findById(authUser._id).select('-password -__v').lean()
            token && user && res.status(200).json({
                success: true,
                message: 'Login success',
                result: { ...user, token }
            })
        } catch (error) {
            return next(error)
        }
    },

    // getUserInfo
    userInfo: async (req, res, next) => {
        try {
            const { auth } = req;
            if (!auth) {
                res.status(403);
                return next(new Error('token is required'));
            }
            auth.token = req.get('authorization').split(' ')[1];
            return res.status(200).json({
                success: true,
                message: 'get userInfo success',
                result: auth
            })
        } catch (error) {
            return next(error.message);
        }
    }

}

export default authController;