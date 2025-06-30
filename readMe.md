*# MERN 04 Project

A full-stack MERN (MongoDB, Express, React, Node.js) application.

<!-- ![Demo App](/client/public/vite.svg)
![Demo App](/client/public/react.svg)
![Demo App](/client/public/node.svg)
![Demo App](/client/public/mongo.svg) -->

### Home Page
![Demo App](/client/public/images/home.png)

### Notes Page
![Demo App](/client/public/images/notes.png)

### Contact Page
![Demo App](/client/public/images/contact.png)

### Login Page
![Demo App](/client/public/images/login.png)

### Register Page
![Demo App](/client/public/images/register.png)

### Create Note Page
![Demo App](/client/public/images/createNote.png)


## Project Structure

```
mern_04/
│
├── client/      # React frontend (Vite)
│   └── src/
│       └── app/
│           ├── components/
│           ├── config/
│           ├── hooks/
│           ├── layouts/
│           └── pages/
│
└── server/      # Node.js backend (Express)
    ├── config/
    ├── controllers/
    ├── database/
    ├── middlewares/
    ├── models/
    ├── routes/
    └── utils/
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB

### Setup

#### 1. Clone the repository

```bash
git clone <your-repo-url>
cd mern_04
```

#### 2. Install dependencies

**Client:**
```bash
cd client
npm install
```

**Server:**
```bash
cd ../server
npm install
```

#### 3. Environment Variables

- Copy `server/config/env.js` and `client/src/config/env.js` as needed and set your environment variables (e.g., MongoDB URI, JWT secret).

#### 4. Run the app

**Start the server:**
```bash
cd server
npm start
```

**Start the client:**
```bash
cd ../client
npm run dev
```

The client will run on [http://localhost:5173](http://localhost:5173) (default Vite port), and the server on [http://localhost:5000](http://localhost:5000).

## Features

- User authentication (register/login)
- Protected routes
- Notes CRUD (create, read, update, delete)
- Contact form

## Folder Details

- `client/src/app/components/`: React components (Navbar, forms, etc.)
- `client/src/app/pages/`: Page components (Home, Auth, Contact)
- `server/controllers/`: Express route controllers
- `server/models/`: Mongoose models
- `server/routes/`: API route definitions

## Scripts

**Client:**
- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production

**Server:**
- `npm start` – Start Express server
- `npm run dev` – Start server with nodemon (if configured)

## License

MIT

---

Feel free to update this README with more details as your project*