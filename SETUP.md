# Disneyland Pokhara - Full Stack Setup Guide

Complete setup instructions for both frontend and backend.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

## Backend Setup

### 1. Navigate to backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/disneyland
JWT_SECRET=your-secret-key-change-this
JWT_EXPIRE=7d
NODE_ENV=development
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# macOS (if installed via Homebrew)
brew services start mongodb-community

# Or start manually
mongod --config /usr/local/etc/mongod.conf
```

### 5. Start the backend server
```bash
npm run dev
```

Backend will run on http://localhost:5000

## Frontend Setup

### 1. Navigate to project root
```bash
cd ..
```

### 2. Install frontend dependencies
```bash
npm install axios
```

### 3. Configure environment variables
Create `.env` file in the root directory:
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Start the development server
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## Initial Setup

### 1. Create an admin user
Use curl or Postman to register the first admin user:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@disneyland.com",
    "password": "admin123"
  }'
```

### 2. Access the admin panel
1. Go to http://localhost:5173/admin/login
2. Login with your credentials
3. Start managing content!

## Admin Panel Features

### Dashboard
- Overview of all management options
- Quick access to different sections

### Manage Games
- Add new games with images
- Edit existing games
- Delete games (admin only)
- Reorder games using up/down arrows
- Categories: Arcade, Carnival, Indoor, Outdoor

### Manage Locations
- Add new locations with images
- Edit location details
- Delete locations (admin only)
- Reorder locations display

### Edit Content
- Edit home page content
- Update about us section
- Manage team information

## Project Structure

```
my-react-app/
├── backend/               # Backend API server
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth & upload middleware
│   │   ├── utils/        # Helper functions
│   │   └── server.js     # Server entry point
│   ├── uploads/          # Uploaded images
│   └── package.json
│
├── src/                  # Frontend React app
│   ├── components/       # Reusable components
│   ├── context/          # Context providers
│   ├── pages/
│   │   └── admin/        # Admin panel pages
│   ├── services/         # API service layer
│   └── css/              # Stylesheets
│
└── package.json
```

## API Testing

Test the API using curl or tools like Postman:

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@disneyland.com",
    "password": "admin123"
  }'
```

### Get all games
```bash
curl http://localhost:5000/api/games
```

### Create a game (with auth token)
```bash
curl -X POST http://localhost:5000/api/games \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "title=Ferris Wheel" \
  -F "description=A classic carnival ride" \
  -F "category=carnival" \
  -F "image=@/path/to/image.jpg"
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check the MONGODB_URI in your .env file
- Try: `mongodb://127.0.0.1:27017/disneyland`

### CORS Errors
- Backend CORS is configured for all origins in development
- Make sure backend is running on port 5000

### Image Upload Issues
- Check the `uploads/` directory exists in backend
- Verify file permissions
- Maximum file size is 5MB

### Authentication Issues
- Clear localStorage in browser developer tools
- Check JWT_SECRET matches in .env
- Verify token expiration settings

## Production Deployment

### Backend
1. Set NODE_ENV=production in .env
2. Use a production MongoDB instance
3. Set a strong JWT_SECRET
4. Configure proper CORS origins
5. Use a process manager like PM2

### Frontend
1. Build the production bundle: `npm run build`
2. Serve the `dist/` directory
3. Update VITE_API_URL to production backend URL
4. Configure proper environment variables

## Security Notes

- Change default JWT_SECRET before production
- Use HTTPS in production
- Implement rate limiting
- Add proper input validation
- Configure MongoDB authentication
- Use environment variables for sensitive data
- Regularly update dependencies

## License

MIT
