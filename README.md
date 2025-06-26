# User Feedback System

This is a basic full-stack feedback system where users can submit and view feedback.

---

## Technologies Used

- Frontend: React (Vite)
- Backend: Node.js, Express.js
- Database: MongoDB

---

## How to Run the Project

### 1. Set up the Backend

1. Open a terminal and go to the `backend` folder:
cd backend



2. Install dependencies:
npm install



3. Create a `.env` file in the `backend` folder and add:
MONGO_URI=mongodb://localhost:27017/feedbackdb
PORT=5000



4. Start the backend server:
npm run dev


The backend will start on: `http://localhost:5000`

---

### 2. Set up the Frontend

1. Open a second terminal and go to the `frontend` folder:
cd frontend



2. Install dependencies:
npm install



3. Start the frontend:
npm run dev



The frontend will open on: `http://localhost:5173`

---

## Features

- Submit feedback with name, message, and category
- View all submitted feedback
- Filter feedback by category

---

## Author

Shivam Rao  
Email: shivamrao077@gmail.com 
GitHub: [shivamrao7](https://github.com/shivamrao7)