import mongoose from 'mongoose'
import { MONGO_URI } from './env.js'
import logger from './logger.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    logger.info('MongoDB Connected')
  } catch (err) {
    logger.error(`MongoDB Connection Failed: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB