import QueryString from "qs";
import { validationResult } from 'express-validator'


const testController = {
    err: async (req, res, next) => {
        try {
            res.append("Access-Control-Allow-Origin", "http://localhost:5173"); // !! is notwork?
            res.append("Access-Control-Allow-Methods", "*");
            res.append("Access-Control-Allow-Headers", "*");
            res.status(401);
            return next(new Error('test error'))
            // const err = new Error('test error');
            // err.status = 402;
            return next(err)
        } catch (error) {
            return next(error)
        }
    },
    auth: async (req, res, next) => {
        try {
            const { auth } = req;
            auth && res.status(200).json({ auth })
        } catch (error) {
            return next(error)
        }
    },
    // {{url}}/api/v1/tests/query?filter[to]=Yangon&sort[name]=1&page=2&filter[from]=mandaly&auth[name]=koko&limit=10
    query: async (req, res, next) => {
        try {
            const { filter, sort, page = 1, auth, limit = 10 } = QueryString.parse(req.query);
            const skip = (parseInt(page) - 1) * parseInt(limit);
            Object.entries(sort).forEach(([key, value]) => {
                sort[key] = Number(value);
            });
            res.set('auth', QueryString.stringify(auth)) // add to res-header
            res.set('filter', QueryString.stringify(filter))
            return res.status(200).json({
                raw: req.query,
                qs: { filter, sort, page: Number(page), auth, limit, skip },
                seft: `http://${req.host}${req.originalUrl}`,
                requestHeader: req.headers.test && req.get('test') // get from req-header
            })
        } catch (error) {
            return next(error)
        }
    },
    // Express queryValidator
    // url ->/api/v1/tests/express-validator
    expressValidator: async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            res.status(400).json({
                meta: { message: 'query validator testing' },
                data: {},
                errors
            })
        } catch (error) {
            return next(error)
        }
    }
};

export default testController;