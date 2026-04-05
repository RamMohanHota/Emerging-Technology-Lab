import 'dotenv/config'
import express from 'express'
import connectToDB from './utils/db.js'
import userRouter from './routes/user.router.js'
import listingRouter from './routes/listing.route.js'
import path from "path"
import { fileURLToPath } from "url"

const app = express()

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Test route
app.get("/", (req, res) => {
    res.send("hello world")
})

// Routes
app.use("/users", userRouter)
app.use("/listings", listingRouter)

// Start server
app.listen(5000, () => {
    console.log("server started at 5000")
    connectToDB()
})