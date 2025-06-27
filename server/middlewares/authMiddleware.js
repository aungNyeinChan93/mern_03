import UserModel from "../models/userModel.js";
import { JWT } from "../utils/helper.js";

const authMiddleware = async (req, res, next) => {
    try {
        // const { authorization } = req.headers;
        const authorization = req.get('Authorization')
        const [type, token] = authorization && authorization.startsWith('Bearer') ? authorization.split(' ') : [];
        if (type !== 'Bearer') {
            res.status(401);
            return next(new Error('Token required!'))
        }
        if (!token) {
            res.status(401);
            return next(new Error('you are not authorize!'))
        };
        const { _id } = token && await JWT.verifyToken(token);
        const authUser = _id && await UserModel.findById(_id).select('name email').lean();
        req.auth = authUser ? authUser : null;
        next();
    } catch (error) {
        return next(error)
    }
};

export default authMiddleware;