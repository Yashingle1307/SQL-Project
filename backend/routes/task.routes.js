import express from "express"
import { addTask, completeTask, deleteTask, getTask, getTasks, updateTask } from "../controller/task.controller.js"

const router = express.Router()

router.get( "/get-tasks", getTasks)
router.get("/get-task/:id", getTask)
router.post("/add-task", addTask)
router.delete("/delete-task/:id", deleteTask)
router.put("/complete-task/:id", completeTask)
router.put("/update-task/:id", updateTask)

export default router