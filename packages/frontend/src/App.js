import React, { useState, useEffect } from 'react'

import { fetchData, postNewTask } from './apiRequests'

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
	}, [])

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

	const createNewTask = async (taskName) => {
		if (!allTasks.find((t) => t.name === taskName)) {
			const newTaskSaved = await postNewTask({ name: taskName, done: false })
			console.log('newTaskSaved', newTaskSaved)
			setAllTasks([...allTasks, newTaskSaved])
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
