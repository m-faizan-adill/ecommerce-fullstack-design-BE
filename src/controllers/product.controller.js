import Product from '../models/product.model.js'
import logger from '../config/logger.js'

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
    logger.info('Fetched all products')
    res.status(200).json({ success: true, data: products })
  } catch (err) {
    err.context = 'getProducts'
    next(err)
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' })
    logger.info(`Fetched product: ${req.params.id}`)
    res.status(200).json({ success: true, data: product })
  } catch (err) {
    err.context = 'getProduct'
    next(err)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    logger.info(`Product Created: ${product._id}`)
    res.status(201).json({ success: true, data: product })
  } catch (err) {
    err.context = 'createProduct'
    next(err)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' })
    logger.info(`Product Updated: ${req.params.id}`)
    res.status(200).json({ success: true, data: product })
  } catch (err) {
    err.context = 'updateProduct'
    next(err)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' })
    logger.info(`Product Deleted: ${req.params.id}`)
    res.status(200).json({ success: true, message: 'Product deleted' })
  } catch (err) {
    err.context = 'deleteProduct'
    next(err)
  }
}