import axios from "axios"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const AddTaskForm = ({setShowAddTaskForm}) => {
	const [task, setTask] = useState({
		name: "",
		description: "",
	} )
	
	const handleChange = (e) => {
		setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async ( e ) =>
	{
		e.preventDefault()
		try {
			await axios.post( "http://localhost:3000/add-task", task )
			window.location.href = "/"
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<form className="bg-white p-6 rounded-lg w-full max-w-md">
				<h2 className="text-xl font-bold mb-4">Add New Task</h2>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Task Name
						</label>
						<input
							type="text"
							className="mt-1 w-full border rounded-lg px-3 py-2"
							name="name"
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Description
						</label>
						<textarea
							className="mt-1 w-full border rounded-lg px-3 py-2"
							rows={3}
							name="description"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={() => setShowAddTaskForm(false)}
							className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
							onClick={handleSubmit}
						>
							Add Task
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddTaskForm
