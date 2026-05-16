import express from 'express'
import { PORT } from './config/env.js'
import connectDB from './config/db.js'

const app = express()

connectDB()

export default app;