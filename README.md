# ✅ TaskApp – Node.js REST API with Auth and Testing

A simple task management API built with **Node.js**, **Express**, and **MongoDB**, using **JWT authentication**.  
Includes full test coverage with `Jest` and `Supertest`.

---

## ⚙️ Features

- 🧾 Register and authenticate users
- 🔐 Secure tasks with JWT-based auth
- ➕ Create, ✅ complete, ❌ delete tasks
- 🔄 Update task details
- 📄 Filter, paginate and sort tasks
- 🧪 Full test coverage for users and tasks
- 🌱 Uses `.env` for config and environment separation

---

## 📁 Project Structure

```text
taskapp/
├── src/
│   ├── config/             # Environment configs
│   │   ├── .env            # Local environment (not committed)
│   │   └── test.env        # Test-specific environment
│   ├── db/
│   │   └── mongoose.js     # MongoDB connection
│   ├── emails/
│   │   └── account.js      # Email logic (e.g. SendGrid)
│   ├── middleware/
│   │   └── auth.js         # JWT authentication middleware
│   ├── models/
│   │   ├── task.js         # Task schema
│   │   └── user.js         # User schema
│   ├── routers/
│   │   ├── app.js          # Express app setup
│   │   ├── index-testing.js# Router for test setup
│   │   └── index.js        # Production router
├── tests/
│   ├── __mocks__/
│   │   └── @sendgrid/
│   │       └── mail.js     # Mock for SendGrid
│   ├── fixtures/
│   │   ├── db.js           # Test DB seed setup
│   │   └── profil-pic.jpg  # Sample image for upload tests
│   ├── task.test.js        # Task API tests
│   └── user.test.js        # User API tests
├── .gitignore              # Ignores env, node_modules, etc.
├── package.json            # Scripts and dependencies
└── README.md
```

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### ⚙️ Set up environment

Create a file named `test.env` inside the `src/config/` directory with the following content:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/taskapp-api
JWT_SECRET=your_own_secret_here
SENDGRID_API_KEY=your_sendgrid_api_key
```

### ▶️ Run the app in development mode

```bash
npm run dev
```

---

## 🧪 Run Tests

```bash
npm test
```

Test coverage includes:

- ✅ User signup, login, and token-based auth  
- ✅ Create, read, update, delete tasks  
- ✅ Task ownership enforcement  
- ✅ Invalid input validation  
- ✅ Auth middleware protections  

---

## 📚 Dependencies

| Package         | Purpose                                |
|-----------------|----------------------------------------|
| express         | Web server and routing                 |
| mongoose        | MongoDB ORM                            |
| mongodb         | Native MongoDB driver                  |
| jsonwebtoken    | Auth via JWT                           |
| bcryptjs        | Password hashing                       |
| validator       | Input validation                       |
| multer          | File upload handling (e.g. avatars)    |
| sharp           | Image resizing and format conversion   |
| dotenv          | Load env vars from `.env` files        |
| nodemon         | Auto-reload for development            |
| jest            | Test runner                            |
| supertest       | HTTP testing                           |
| @sendgrid/mail  | SendGrid email integration             |

---

> 💬 Perfect for practicing real-world API development, JWT-based auth, file uploads, and writing clean, testable Node.js code.

