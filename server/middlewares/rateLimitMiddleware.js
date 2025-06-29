import rateLimit from "../config/upstash.js";

const rateLimitMiddleware = async (req, res, next) => {
    try {
        const x_limit = req.get('X-RateLimit-Limit') ?? 'default';
        const { success, limit, reset, remaining, reason } = await rateLimit.limit(x_limit);
        if (!success) {
            return res.status(429).json({
                success: false,
                message: `Rate Limited : ${reason}`,
                error: {
                    limit, reset: new Date(reset).toUTCString(), remaining
                }
            })
        }
        next();
    } catch (error) {
        return next(error)
    }
};

export default rateLimitMiddleware;