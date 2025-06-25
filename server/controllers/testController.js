
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
    }
};

export default testController;