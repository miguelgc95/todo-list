import express from 'express';

// import cors from 'cors'
// import morgan from 'morgan'

import { tasksRouter } from './routes';

const app = express();

// app.use(express.json())
// app.use(cors())
// app.use(morgan('dev'))

app.use('/tasks', tasksRouter);

export default app;
