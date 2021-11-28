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
		delete response.data._id
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export { fetchData, postNewTask }
