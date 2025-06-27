import UserModel from "../models/userModel.js";
import { JWT } from "../utils/helper.js";

/**
 * Express middleware to authenticate requests using a JWT token from the Authorization header.
 *
 * This middleware checks for the presence of a Bearer token in the Authorization header,
 * verifies the token, and attaches the authenticated user's basic information (name and email)
 * to the `req.auth` property. If authentication fails, it responds with a 401 status and passes
 * an error to the next middleware.
 *
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 * @returns {Promise<void>}
 */

const authMiddleware = async (req, res, next) => {
    try {
        // const { authorization } = req.headers;
        const authorization = req.get('Authorization');
        if (!authorization) {
            res.status(401);
            return next(new Error('Authorization header missing!'));
        }
        const [type, token] = authorization.startsWith('Bearer') ? authorization.split(' ') : [];
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