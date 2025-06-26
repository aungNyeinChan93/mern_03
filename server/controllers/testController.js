import QueryString from "qs";

const testController = {
    err: async (req, res, next) => {
        try {
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
            const { filter, sort, page, auth, limit } = QueryString.parse(req.query);
            const skip = (parseInt(page) - 1) * parseInt(limit);
            // for (let i in sort) {
            //     sort[i] = parseInt(sort[i]);
            // }
            Object.entries(sort).forEach(([key, value]) => {
                sort[key] = Number(value);
            });
            return res.status(200).json({
                raw: req.query,
                qs: { filter, sort, page: Number(page), auth, limit, skip },
            })
        } catch (error) {
            return next(error)
        }
    }
};

export default testController;