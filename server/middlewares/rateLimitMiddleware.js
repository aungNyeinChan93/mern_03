import rateLimit from "../config/upstash.js";

const rateLimitMiddleware = async (req, res, next) => {
    try {
        const x_limit = req.get('X-RateLimit-Limit') ?? 'default';
        const { success, limit, reset, remaining, reason } = await rateLimit.limit(x_limit);
        if (!success) {
            return res.status(429).json({
                success: false,
                error: {
                    limit, reset: new Date(reset).toUTCString(), remaining, reason
                }
            })
        }
        next();
    } catch (error) {
        return next(error)
    }
};

export default rateLimitMiddleware;