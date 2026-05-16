import logger from '../config/logger.js'

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  const context = err.context || 'Unknown Function'

  logger.error(`[${context}] ${statusCode} - ${message}`)

  res.status(statusCode).json({
    success: false,
    message
  })
}

export default errorHandler