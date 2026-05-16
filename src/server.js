import express from 'express'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())

// Routes yahan aayenge
// app.use('/api/...', ...)

app.use(errorHandler)

export default app