import express from 'express'
import { getAllTasks, postNewTask } from '../../controllers/tasksController'

const tasksRouter = express.Router()

tasksRouter.get('/', getAllTasks)
tasksRouter.post('/postNewTask', postNewTask)

export default tasksRouter
