import express from 'express';
import { getTasks } from '../../controllers/tasksController';

const trainingRouter = express.Router();

trainingRouter.get('/', getTasks);
// trainingRouter.post('/post', postWeek);

export default trainingRouter;
