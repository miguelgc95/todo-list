import express from 'express';
import { getAllTasks, postAllTasks } from '../../controllers/tasksController';

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);
tasksRouter.post('/postAll', postAllTasks);

export default tasksRouter;
