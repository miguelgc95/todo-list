import express from 'express'
import { getAllTasks, postNewTask, deleteTask } from '../../controllers/tasksController'

const tasksRouter = express.Router()

tasksRouter.get('/', getAllTasks)
tasksRouter.post('/postNewTask', postNewTask)
tasksRouter.delete('/deleteTask/:_id', deleteTask)

export default tasksRouter
