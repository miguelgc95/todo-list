import { Request, Response } from 'express';

import AllTasksModel from '../models/tasks';

async function getAllTasks(req: Request, res: Response) {
    try {
        const allTasks = await AllTasksModel.find();
        res.json(allTasks);
    } catch (error) {
        res.json(error);
    }
}

async function postAllTasks(req: Request, res: Response) {
    try {
        const postAllTasksObject = new AllTasksModel(req.body);
        const result = await postAllTasksObject.save();
        res.status(200).json(result);
    } catch (error) {
        res.json(error);
    }
}

export { getAllTasks, postAllTasks };
