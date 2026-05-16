import app from './server.js'
import { PORT } from './config/env.js'
import logger from './config/logger.js'
import connectDB from './config/db.js'

connectDB()

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`))