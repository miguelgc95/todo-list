import axios from 'axios'

import { Task } from '../interfaces'

const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:3006/tasks')
		return response.data
	} catch (error) {
		console.log(error)
		return error
	}
}

const postNewTask = async (task: Task) => {
	try {
		const response = await axios.post('http://localhost:3006/tasks/postNewTask', task)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const deleteTaskRequest = async (_id: any) => {
	try {
		const response = await axios.delete(`http://localhost:3006/tasks/deleteTask/${_id}`)

		return response.status === 200 ? true : false
	} catch (error) {
		console.log(error)
	}
}

export { fetchData, postNewTask, deleteTaskRequest }
