import chalk from "chalk";

const logMiddleware = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(chalk.blue(`${req.method} ${req.host}${req.originalUrl} - ${res.statusCode} - ${(duration)}ms`));
    });
    next();
};

export default logMiddleware;