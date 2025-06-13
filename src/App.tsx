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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<OurLocations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
