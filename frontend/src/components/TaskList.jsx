import { useEffect, useState } from "react"
import axios from "axios"
import { Check, Edit2, Trash2 } from "lucide-react"

// eslint-disable-next-line react/prop-types
const TaskList = ({ setShowEditTaskForm, filter, setId }) => {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		fetchAllTasks()
	}, [])

	const fetchAllTasks = async () => {
		try {
			const res = await axios.get("http://localhost:3000/get-tasks")
			setTasks(res.data)
		} catch (error) {
			console.error(error)
		}
	}

	const toggleComplete = async (id) => {
		try {
			await axios.put(`http://localhost:3000/complete-task/${id}`)
			window.location.reload()
		} catch (error) {
			console.error(error)
		}
	}

	const deleteTask = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/delete-task/${id}`)
			window.location.reload()
		} catch (error) {
			console.error(error)
		}
	}

	const filteredTasks = tasks.filter((task) => {
		if (filter === "All") return true
		if (filter === "Completed") return task.status === "Completed"
		if (filter === "Not Completed") return task.status === "Not Completed"
		return false
	})

	return (
		<div className="space-y-4">
			{filteredTasks.map((task) => (
				<div
					key={task.id}
					className={`p-4 rounded-lg border text-justify ${
						task.status === "Completed" ? "bg-gray-50" : "bg-white"
					}`}
				>
					<div className="flex items-start justify-between">
						<div className="flex items-start gap-4">
							<button
								onClick={() => toggleComplete(task.id)}
								className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
									task.status === "Completed"
										? "bg-green-500 border-green-500"
										: "border-gray-300"
								}`}
							>
								{task.status === "Completed" && (
									<Check
										size={16}
										className="text-white"
									/>
								)}
							</button>
							<div>
								<h3
									className={`font-medium ${
										task.status === "Completed"
											? "text-gray-500 line-through"
											: "text-gray-800"
									}`}
								>
									{task.name}
								</h3>
								<p className="text-gray-600 mt-1">
									{task.description}
								</p>
							</div>
						</div>
						<div className="flex gap-2">
							<button
								className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								onClick={() => {
									setShowEditTaskForm(true)
									setId(task.id)
								}}
							>
								<Edit2 size={18} />
							</button>
							<button
								className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
								onClick={() => deleteTask(task.id)}
							>
								<Trash2 size={18} />
							</button>
						</div>
					</div>
				</div>
			))}
			{filteredTasks.length === 0 && (
				<p className="text-gray-500 py-12 text-center">
					No tasks found
				</p>
			)}
		</div>
	)
}

export default TaskList
