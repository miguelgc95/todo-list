import axios from 'axios'

import { Task } from '../interfaces'

import dotenv from 'dotenv';
dotenv.config();

const {
    NODE_ENV,
} = process.env;

const base_url: string = NODE_ENV === 'production' ? 'https://todo-list-mike.herokuapp.com' : 'http://localhost:3006'

const fetchData = async () => {
	try {
		const response = await axios.get(`${base_url}/tasks`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const postNewTask = async (task: Task) => {
	try {
		const response = await axios.post(`${base_url}/tasks/postNewTask`, task)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const deleteTaskRequest = async (_id: any) => {
	try {
		const response = await axios.delete(`${base_url}/tasks/deleteTask/${_id}`)

		return response.status === 200 ? true : false
	} catch (error) {
		console.log(error)
	}
}

export { fetchData, postNewTask, deleteTaskRequest }
