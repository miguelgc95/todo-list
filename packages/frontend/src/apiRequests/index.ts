import axios from 'axios'

const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:3006/tasks')
		console.log(`response`, response)
		return response.data
	} catch (error) {
		console.log(error)
		return error
	}
}

export { fetchData }
