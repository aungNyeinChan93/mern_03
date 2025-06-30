import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDb from './database/connectDb.js';
import { PORT } from './config/env.js'
import authRouter from './routes/authRouter.js';
import noteRouter from './routes/noteRouter.js';
import testRouter from './routes/testRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import rateLimitMiddleware from './middlewares/rateLimitMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';

const app = express();

// Database connect
connectDb(() => {
    app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
})

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
app.use(logMiddleware);
app.use(rateLimitMiddleware)


// test
app.get('/demo', (req, res, next) => {
    res.status(200).json('this is demo')
})

// routes
app.use('/api/v1/tests', testRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/notes', noteRouter)

// error handaler
app.use(errorMiddleware)


