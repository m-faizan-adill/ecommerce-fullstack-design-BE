import mongoose from 'mongoose'
import Product from '../models/product.model.js'
import { MONGO_URI } from '../config/env.js'

const products = [
  {
    name: 'Laptop',
    price: 999,
    image: 'https://via.placeholder.com/500',
    description: 'High performance laptop',
    category: 'tech',
    stock: 10
  },
  {
    name: 'T-Shirt',
    price: 29,
    image: 'https://via.placeholder.com/500',
    description: 'Cotton t-shirt',
    category: 'cloth',
    stock: 50
  },
  {
    name: 'Sofa',
    price: 499,
    image: 'https://via.placeholder.com/500',
    description: 'Comfortable sofa',
    category: 'interior',
    stock: 5
  },
  {
    name: 'Phone',
    price: 699,
    image: 'https://via.placeholder.com/500',
    description: 'Latest smartphone',
    category: 'tech',
    stock: 20
  },
  {
    name: 'Jeans',
    price: 49,
    image: 'https://via.placeholder.com/500',
    description: 'Slim fit jeans',
    category: 'cloth',
    stock: 30
  }
]

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB Connected')

    await Product.deleteMany()
    console.log('Old data deleted')

    await Product.insertMany(products)
    console.log('Sample data inserted!')

    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

seedDB()