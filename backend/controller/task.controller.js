import {db} from '../config/db.js'

export const getTasks = ( req, res ) =>
{
  const q = "SELECT * FROM tasks"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

export const getTask = (req, res) => {
	const taskID = req.params.id
	const q = "SELECT * FROM tasks WHERE id = ?"
	db.query(q, [taskID], (err, data) => {
		if (err) return res.json(err)
		return res.json(data[0])
	})
}

export const addTask = (req, res) => {
	const q = "INSERT INTO tasks (name, description) VALUES (?)"
	const values = [req.body.name, req.body.description]
	db.query(q, [values], (err, data) => {
		if (err) return res.json(err)
		return res.json("Task added successfully")
	})
}

export const deleteTask = (req, res) => {
	const taskID = req.params.id
	const q = "DELETE FROM tasks WHERE id = ?"
	db.query(q, [taskID], (err, data) => {
		if (err) return res.json(err)
		return res.json("Task deleted successfully")
	})
}

export const completeTask = (req, res) => {
	const taskID = req.params.id
	const getStatusQuery = "SELECT status FROM tasks WHERE id = ?"
	db.query(getStatusQuery, [taskID], (err, data) => {
		if (err) return res.json(err)
		const currentStatus = data[0].status
		const newStatus =
			currentStatus === "Completed" ? "Not Completed" : "Completed"
		const updateQuery = "UPDATE tasks SET status = ? WHERE id = ?"
		db.query(updateQuery, [newStatus, taskID], (err, data) => {
			if (err) return res.json(err)
			return res.json("Task status updated successfully")
		})
	})
}

export const updateTask = (req, res) => {
	const taskID = req.params.id
	const q = "UPDATE tasks SET name = ?, description = ? WHERE id = ?"
	const values = [req.body.name, req.body.description]
	db.query(q, [...values, taskID], (err, data) => {
		if (err) return res.json(err)
		return res.json("Task updated successfully")
	})
}