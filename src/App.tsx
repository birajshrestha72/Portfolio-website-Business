import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import GamesServices from './GamesServices';
import OurLocations from './OurLocations';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
