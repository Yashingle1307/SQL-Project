import { useState } from "react"
import Header from "./components/Header"
import Filters from "./components/Filters"
import TaskList from "./components/TaskList"
import AddTaskForm from "./components/AddTaskForm"
import EditTaskForm from "./components/EditTaskForm"

function App() {
	const [showAddTaskForm, setShowAddTaskForm] = useState(false)
	const [showEditTaskForm, setShowEditTaskForm] = useState(false)
	const [filter, setFilter] = useState("All")
	const [id, setId] = useState("")

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-6">
			<Header setShowAddTaskForm={setShowAddTaskForm} />
			<Filters
				filter={filter}
				setFilter={setFilter}
			/>
			<TaskList
				setShowEditTaskForm={setShowEditTaskForm}
				filter={filter}
				setId={setId}
			/>
			{showAddTaskForm && (
				<AddTaskForm setShowAddTaskForm={setShowAddTaskForm} />
			)}
			{showEditTaskForm && (
				<EditTaskForm
					setShowEditTaskForm={setShowEditTaskForm}
					id={id}
				/>
			)}
		</div>
	)
}

export default App
