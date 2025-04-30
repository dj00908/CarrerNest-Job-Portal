# 💼 Job Search Portal (MERN Stack)

A personal full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This Job Search Portal allows job seekers to browse and apply to jobs, while recruiters can post and manage job listings through a user-friendly interface.

---

## 🚀 Features

- 👤 User registration & login (Job Seekers and Recruiters)
- 🧑‍💼 Recruiters can post and manage job openings
- 🔎 Job seekers can search and apply for jobs
- 📋 Dashboard views for both job seekers and recruiters
- 🔐 JWT-based authentication with bcrypt password hashing
- 📱 Responsive design using React and Bootstrap

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Create React App)
- React Router
- Axios
- Bootstrap / Custom CSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt

---

Project Setup & Running Locally
1. Clone the Repository
$ git clone https://github.com/your-username/job-search-portal.git
$ cd job-search-portal

2. Set up Backend
$ cd backend
$ npm install
Create a .env file inside the backend/ folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend:
$ npm start

3. Set up Frontend
$ cd ../frontend
$ npm install
$ npm start
The frontend will run on http://localhost:3000 and the backend on http://localhost:5000.
