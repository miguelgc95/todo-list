import express from 'express';
import { getAllTasks } from '../../controllers/tasksController';

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);
// trainingRouter.post('/post', postWeek);

export default tasksRouter;
