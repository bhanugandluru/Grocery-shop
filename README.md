ShopSmart - Your Digital Grocery Store (GroceryShop)

Full Stack Development with MERN

Digital Grocery Store is an online e-commerce platform designed to simplify the process of buying groceries. It provides a user-friendly interface for customers to browse products and manage their shopping cart, and a dedicated dashboard for administrators to manage inventory.

📂 Project Features

. ✅ Role-based Access for Customers & Administrators

. ✅ Full Product Management (Create, Read, Update, Delete) by Admins

. ✅ Dynamic Shopping Cart for all users

. ✅ Secure User Authentication with JSON Web Tokens (JWT)

. ✅ Responsive UI built with React

🛠 Tech Stack

. Frontend: React

. Backend: Node.js, Express.js

. Database: MongoDB

📁 Project Folder Structure

├── frontend      # React Frontend Application
├── controllers   # Express Backend Logic
├── models        # MongoDB Data Models
├── routes        # API Routes
├── .env          # Environment Variables
├── package.json  # Backend Dependencies
└── server.js     # Main Backend Server File
🚀 Setup Instructions
Prerequisites

. Node.js

NPM (Node Package Manager)

MongoDB Atlas Account (or local MongoDB installation)

Installation
Clone the repository

Bash

git clone https://github.com/Harish25232/Grocery-Store.git
Navigate to the project directory

Bash

cd Grocery-Store
Install backend dependencies (in the root folder)

Bash

npm install
Install frontend dependencies

Bash

cd frontend
npm install
Create a .env file in the root project directory and add your variables (MongoDB URI, JWT Secret, etc.).

🖥 Running the Application
Make sure your MongoDB database is running (either locally or connected via Atlas).

Start Backend Server (from the root directory)

Bash

npm run dev
Start Frontend Application (open a new terminal for this)

Bash

cd frontend
npm start
Application runs on:
Frontend: http://localhost:3000

Backend API: http://localhost:5000 (or the port you defined in your .env file)

🔒 Authentication
Email & Password based authentication for both Customers and Admins.

Secured with JSON Web Tokens (JWT) for protecting API routes and managing sessions.

📋 API Endpoints
Method

Endpoint

Description

POST

/api/auth/register

Register a new user

POST

/api/auth/login

Login for users and admins

GET

/api/products

Fetch a list of all products

POST

/api/products

Create a new product (Admin)

GET

/api/cart

Get items in the current user's cart

POST

/api/cart

Add an item to the cart

🖥 User Interfaces
Login & Registration Pages

Home Page with Product Gallery

Product Detail Page

Shopping Cart Page

User Profile / Dashboard

Admin Dashboard (for Product Management)

🧪 Testing
Backend APIs were tested for functionality and response times using Postman.

Frontend components and user flow were tested across different browsers using Chrome DevTools.

👨‍💻 Team Members
Harish P (Team Leader)
(Feel free to add other members here)

🎥 Demo
A video demonstration of the project can be added to the repository to showcase its features and functionality.

📌 Note
This project was developed for academic and portfolio purposes, demonstrating core competencies in MERN stack development, from backend API creation to frontend user interface design.
