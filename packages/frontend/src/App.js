import React, { useState, useEffect } from 'react'

import { fetchData } from './apiRequests'

import { TaskBanner } from './components/TaskBanner'
import { TaskRow } from './components/TaskRow'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

const App = () => {
	const [allTasks, setAllTasks] = useState([])
	const [showCompleted, setshowCompleted] = useState(false)

	useEffect(() => {
		async function dealWithAsynchronous() {
			const fetchedTasks = await fetchData()
			setAllTasks(fetchedTasks)
		}

		dealWithAsynchronous()
		console.log(dealWithAsynchronous())
	}, [])

	useEffect(() => {
		// axios.post('/tasks/postAll', allTasks)
	}, [allTasks])

	useEffect(() => {
		localStorage.setItem('showCompletedLS', JSON.stringify(showCompleted))
	}, [showCompleted])

	const renderItems = (doneValue) => {
		return allTasks
			.filter((task) => task.done === doneValue)
			.map((task) => (
				<TaskRow task={task} key={task.name} toggleTask={toggleTask} deleteTask={deleteTask} />
			))
	}

	const createNewTask = (taskName) => {
		if (!allTasks.find((t) => t.name === taskName)) {
			setAllTasks([...allTasks, { name: taskName, done: false }])
		}
	}

	const toggleTask = (task) => {
		return setAllTasks(allTasks.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)))
	}

	const deleteTask = (taskName) => {
		setAllTasks(allTasks.filter((task) => task.name !== taskName))
	}

	return (
		<div className="App">
			<TaskBanner allTasks={allTasks} />
			<div className="container-fluid">
				<TaskCreator callback={createNewTask} />
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Description</th>
							<th>Done</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{renderItems(false)}</tbody>
				</table>
				<div className="p-4">
					<VisibilityControl
						description="Completed Tasks"
						isChecked={showCompleted}
						callback={(checked) => setshowCompleted(checked)}
					/>
				</div>
				{showCompleted && (
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>Description of completed tasks</th>
								<th>Done</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>{renderItems(true)}</tbody>
					</table>
				)}
			</div>
		</div>
	)
}
export default App
