import { PlusCircle } from "lucide-react"

// eslint-disable-next-line react/prop-types
const Header = ({ setShowAddTaskForm }) => {
	return (
		<div className="flex justify-between items-center">
			<h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
			<button
				className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
				onClick={() => setShowAddTaskForm(true)}
			>
				<PlusCircle size={20} />
				Add Task
			</button>
		</div>
	)
}

export default Header
