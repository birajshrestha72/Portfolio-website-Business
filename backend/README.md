# Disneyland Pokhara Backend API

Backend server for managing Disneyland Pokhara content with user authentication and CRUD operations.

## Features

- User authentication with JWT
- Games CRUD operations
- Locations CRUD operations
- Content management
- Image upload functionality
- Drag-and-drop reordering

## Setup Instructions

### 1. Install MongoDB

Make sure you have MongoDB installed and running on your system.

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/disneyland
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRE=7d
NODE_ENV=development
```

### 4. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on http://localhost:5000

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (Protected)

### Games
- GET `/api/games` - Get all games
- GET `/api/games/:id` - Get single game
- POST `/api/games` - Create game (Protected)
- PUT `/api/games/:id` - Update game (Protected)
- DELETE `/api/games/:id` - Delete game (Protected - Admin only)
- PUT `/api/games/reorder` - Reorder games (Protected)

### Locations
- GET `/api/locations` - Get all locations
- GET `/api/locations/:id` - Get single location
- POST `/api/locations` - Create location (Protected)
- PUT `/api/locations/:id` - Update location (Protected)
- DELETE `/api/locations/:id` - Delete location (Protected - Admin only)
- PUT `/api/locations/reorder` - Reorder locations (Protected)

### Content
- GET `/api/content/:page` - Get content for a page
- PUT `/api/content/:page` - Update page content (Protected)

## Default Admin User

Create an admin user using the register endpoint:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@disneyland.com",
    "password": "admin123"
  }'
```

## File Upload

Images are stored in the `uploads/` directory and served at `/uploads/:filename`.

Maximum file size: 5MB
Allowed formats: jpeg, jpg, png, gif, webp
