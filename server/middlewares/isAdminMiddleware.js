import UserModel from '../models/userModel.js';
import { JWT } from '../utils/helper.js'

const isAdminMiddleware = async (req, res, next) => {
    try {
        const authorization = req.get('Authorization');
        if (!authorization) {
            res.status(400);
            return next(Error('Authorization header is missing!'))
        };
        const [type, token] = authorization && authorization.startsWith('Bearer') ? authorization.split(' ') : [];
        if (type !== 'Bearer') {
            res.status(401);
            return next(new Error('Token required!'))
        }
        if (!token) {
            res.status(401);
            return next(new Error('you are not authorize!!!'))
        };
        const { _id } = token && await JWT.verifyToken(token);
        if (!_id) {
            res.status(400);
            return next(new Error('Token Verification was failed!'))
        };
        const auth = _id && await UserModel.findById(_id).lean();
        if (!auth) {
            res.status(400);
            return next(Error('User not Found!'))
        }
        const isAdmin = auth?.role === 'admin' ? true : false;
        if (!isAdmin) {
            res.status(403);
            return next(new Error('Admin Only!!!!'))
        };
        next();
    } catch (error) {
        return next(error)
    }
};

export default isAdminMiddleware;
