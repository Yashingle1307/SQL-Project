import express from "express"
import cors from "cors"
import taskRoutes from "./routes/task.routes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("", taskRoutes)

app.listen(process.env.PORT, () => {
	console.log("Connected to Backend")
})