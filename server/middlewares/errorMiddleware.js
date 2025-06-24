
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.status ? err.status : res.statusCode
    return res.status(statusCode || 500).json({
        success: false,
        error: err.message,
        status: err.status
    })
};

export default errorMiddleware;