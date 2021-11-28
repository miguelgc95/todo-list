import React from 'react'

export const TaskRow = (props) => (
	<tr key={props.task.name}>
		<td>{props.task.name}</td>
		<td>
			<input
				type="checkbox"
				checked={props.task.done}
				onChange={() => props.toggleTask(props.task)}
			/>
		</td>
		<td>
			<div className="pl-1" onClick={() => props.deleteTask(props.task.name)}>
				{deleteSVG}
			</div>
		</td>
	</tr>
)

const deleteSVG = (
	<svg
		enableBackground="new 0 0 512 512"
		height="20px"
		id="Layer_1"
		version="1.1"
		viewBox="0 0 512 512"
		width="20px"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				d="M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z"
				fill="#37404D"
			/>
			<rect fill="#37404D" height="317.885" width="19.868" x="246.173" y="126.511" />
			<polygon
				fill="#37404D"
				points="206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  "
			/>
			<polygon
				fill="#37404D"
				points="345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017  "
			/>
		</g>
	</svg>
)
