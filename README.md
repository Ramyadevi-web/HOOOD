# 🔐 HOOOD Authentication Backend

A secure authentication and user management REST API built for the HOOOD platform.

This backend provides user registration, login, JWT-based authentication, and protected routes using Node.js, Express, MongoDB, and Mongoose.

---

## 🚀 Live API

Base URL:
``.
https://hoood.onrender.com
```

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## 📁 Project Structure

```
Server/
│
├── config/
│   └── dbConfig.js
│
├── controller/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── authRoutes.js
│
├── index.js
├── package.json
├── .gitignore
└── .env.example
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI = mongodb+srv://<username>:<password>@cluster.mongodb.net/HOOOD
JWT_SECRET = your_super_secret_key
PORT = 5000
JWT_EXPIRES_IN = 1h

```

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/yourusername/hoood-auth-backend.git
```

Navigate into the project:

```
cd Server
```

Install dependencies:

```
npm install
```

Run the server:

```
npm start
```

---

## 🌐 API Endpoints

### 🔹 1. Register User

**POST** `/api/users/register`

Request Body:
```json
{
  "userName": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "_id": "...",
  "userName": "John",
  "email": "john@example.com",
  "role": "user"
}
```

---

### 🔹 2. Login User

**POST** `/api/users/login`

Request Body:
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "...",
    "userName": "John",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### 🔹 3. Get Logged-In User Info (Protected)

**GET** `/api/users/user`

Headers:
```
Authorization: JWT_TOKEN
```

Response:
```json
{
  "id": "...",
  "iat": 123456789,
  "exp": 123456789
}
```

---

### 🔹 4. Get User By ID

**GET** `/api/users/:id`

---

### 🔹 5. Update User

**PUT** `/api/users/:id`

---

### 🔹 6. Delete User

**DELETE** `/api/users/:id`

---

## 🔒 Authentication

This API uses JWT-based authentication.

- After login, a token is generated.
- Include the token in the `Authorization` header for protected routes.

Example:
```
Authorization: your_jwt_token
```

---

## 🚀 Deployment

This project is deployed using Render Web Service.

Every push to the main branch automatically triggers redeployment.

---

## 👨‍💻 Author

Developed for the HOOOD platform.
