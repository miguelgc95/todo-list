import { Request, Response } from 'express';

import AllTasksModel from '../models/tasks';

async function getAllTasks(req: Request, res: Response) {
    try {
        const allTasks = await AllTasksModel.find();
        console.log(allTasks);
        res.json(allTasks);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

// async function postWeek(req, res) {
//     try {
//         const week = new InitialWeek(req.body);
//         const result = await week.save();
//         res.status(200).json(result);
//     } catch (error) {
//         res.json(error);
//     }
// }

export { getAllTasks };
