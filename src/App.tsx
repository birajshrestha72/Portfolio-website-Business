import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import GamesServices from './GamesServices';
import OurLocations from './OurLocations';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageGames from './pages/admin/ManageGames';
import GameForm from './pages/admin/GameForm';
import Settings from './pages/admin/Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/games" element={
            <>
              <Header />
              <GamesServices />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/locations" element={
            <>
              <Header />
              <OurLocations />
              <Footer />
            </>
          } />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/games" element={
            <ProtectedRoute>
              <ManageGames />
            </ProtectedRoute>
          } />
          <Route path="/admin/games/new" element={
            <ProtectedRoute>
              <GameForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/games/edit/:id" element={
            <ProtectedRoute>
              <GameForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
