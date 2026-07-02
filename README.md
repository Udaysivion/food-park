# Food Park — Project Structure

## Folder Layout

```
food-park/
├── frontend/   React + Vite public website (port 5173)
└── backend/    Node.js + Express API + Admin Panel (port 4000)
```

## Quick Start

### 1. Start the Backend (API + Admin Panel)
```bash
cd backend
npm install     # first time only
npm start       # or: node server.js
```
- API:         http://localhost:4000/api/menu
- Admin Panel: http://localhost:4000/admin

### 2. Start the Frontend (Dev Server)
```bash
cd frontend
npm install     # first time only
npm run dev
```
- Website: http://localhost:5173

> Make sure the backend is running BEFORE opening the menu page.

## Admin Panel Features
- View all menu categories and items
- Add / Edit / Delete menu items per category
- Add / Delete categories
- Changes instantly reflect on the public Menu page
