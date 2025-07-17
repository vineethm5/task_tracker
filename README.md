A task management platform where users can:

🔐 Sign up / log in

📋 Create boards (projects)

➕ Add lists/columns (e.g., “Todo”, “In Progress”, “Done”)

✅ Create & assign tasks to team members

📦 Drag and drop tasks between lists

🧑‍🤝‍🧑 Collaborate with team (real-time)

📅 Add due dates, comments, labels, attachments



Layer	Stack
Frontend	React + TailwindCSS / Bootstrap
State Mgmt	React Context or Redux Toolkit
Drag & Drop	react-beautiful-dnd or dnd-kit
Backend	Node.js + Express
Auth	JWT-based authentication
DB	MongoDB + Mongoose
Real-time	Socket.IO (optional for collab)

```
📁 tasktrackr/
├── 📁 controllers/
│   ├── authController.js
│   ├── boardController.js
│   └── taskController.js
├── 📁 models/
│   ├── User.js
│   ├── Board.js
│   └── Task.js
├── 📁 routes/
│   ├── authRoutes.js
│   ├── boardRoutes.js
│   └── taskRoutes.js
├── 📁 views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── auth/
│   │   ├── login.ejs
│   │   └── register.ejs
│   ├── dashboard.ejs
│   └── board.ejs
├── 📁 public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── 📁 middleware/
│   └── authMiddleware.js
├── 📁 utils/
│   └── db.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

| Tag                      | Purpose                   |
| ------------------------ | ------------------------- |
| `<%= %>`                 | Print (escaped HTML)      |
| `<%- %>`                 | Print (unescaped HTML)    |
| `<% %>`                  | Run JS code (no output)   |
| `<%# %>`                 | Comment (ignored in HTML) |
| `<%- include('file') %>` | Include another EJS file  |
