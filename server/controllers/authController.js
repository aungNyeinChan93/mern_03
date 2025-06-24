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
    }
}

export default authController;