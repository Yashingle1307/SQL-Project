import { useEffect, useState } from "react"
import axios from "axios"

// eslint-disable-next-line react/prop-types
const AddTaskForm = ({ setShowEditTaskForm, id }) => {
	const [task, setTask] = useState({
		name: "",
		description: "",
	})

	useEffect(() => {
		const fetchTask = async () => {
			try {
				const res = await axios.get(
					`http://localhost:3000/get-task/${id}`
				)
				setTask(res.data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchTask()
	}, [id])

	const handleChange = (e) => {
		setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleUpdate = async () =>
	{
		try {
			axios.put( `http://localhost:3000/update-task/${ id }`, task )
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<form className="bg-white p-6 rounded-lg w-full max-w-md">
				<h2 className="text-xl font-bold mb-4">Update Task</h2>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Task Name
						</label>
						<input
							type="text"
							className="mt-1 w-full border rounded-lg px-3 py-2"
							name="name"
							value={task.name}
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
							name="description"
							value={task.description}
							rows={3}
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={() => setShowEditTaskForm(false)}
							className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
							onClick={() => handleUpdate()}
						>
							Update Task
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddTaskForm
