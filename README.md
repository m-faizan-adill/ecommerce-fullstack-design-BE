# Ecommerce Fullstack Design - Backend

A RESTful API built with Node.js, Express, and MongoDB.

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- Winston (Logger)
- Nodemon (Development)
- Dotenv

## Project Structure

```
src/
├── config/
│   ├── db.js
│   ├── env.js
│   └── logger.js
├── controllers/
│   └── product.controller.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── product.model.js
├── routes/
│   ├── index.js
│   └── product.routes.js
├── seeders/
│   └── product.seeder.js
├── index.js
└── server.js
```

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/m-faizan-adill/ecommerce-fullstack-design-BE.git
cd ecommerce-fullstack-design-BE
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### 4. Seed the database
```bash
npm run seed
```

### 5. Start the server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/products` | Get all products |
| GET | `/api/v1/products/:id` | Get single product |
| POST | `/api/v1/products` | Create a product |
| PUT | `/api/v1/products/:id` | Update a product |
| DELETE | `/api/v1/products/:id` | Delete a product |

## Product Schema

| Field | Type | Required |
|-------|------|----------|
| name | String | Yes |
| price | Number | Yes |
| image | String | Yes |
| description | String | Yes |
| category | String | Yes |
| stock | Number | Yes |

## Logging

Winston logger is configured to:
- Print all logs to console
- Save error logs to `logs/error.log`
- Save all logs to `logs/combined.log`