# 🏆 Leaderboard Project

This project is a **Leaderboard Application** where users can be added, claim points, and view their history.  
It is built using **MERN Stack** (MongoDB, Express, React, Node.js).

---

## 🚀 Features

- **Add User** → Create new users for the leaderboard.  
- **Get Users** → Fetch and display all users with their points.  
- **Claim Points** → Users can claim points, which update in real time.  
- **History** → Track the history of points claimed by each user.  
- **Leaderboard** → Display top users based on their total points.  

---

## ⚙️ Tech Stack

**Frontend:** React, Axios, TailwindCSS (for styling)  
**Backend:** Node.js, Express.js, MongoDB  
**Database:** MongoDB Atlas (or local MongoDB)  

---

## 📂 Project Structure

```
Leaderboard/
│── backend/ # Node.js + Express API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes (getUser, addUser, claimPoints, history)
│ └── server.js # Express app entry point
│
│── frontend/ # React app
│ ├── src/
│ │ ├── components/ # UI components (Leaderboard, AddUser, ClaimPoints, History)
│ │ ├── pages/ # Page-level components
│ │ └── App.js # Main React app
│
└── README.md

```

---

## 🔑 API Endpoints

### User Routes
- `GET /getuser` → Fetch all users  
- `POST /adduser` → Add a new user  

### Points Routes
- `POST /claimpoints/:userid` → Claim points for a user  
- `GET /history/:userid` → Get claim history of a user  

---

## 🖥️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/leaderboard.git
cd leaderboard

2. Setup Backend
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongo_connection_string
PORT=3000


Run backend:

npm start

3. Setup Frontend
cd frontend
npm install
npm run dev

📊 Example Flow

Add a user → POST /adduser

Claim points → POST /claimpoints/:userid

Check leaderboard → GET /getuser

View point history → GET /history/:userid

📸 Screenshots (Optional)

Leaderboard UI

Add User Form

Claim Points Section

History Table

✨ Future Improvements

Authentication (Login/Signup)

Admin panel for managing users

Pagination & Search in leaderboard

Real-time updates using Socket.IO
