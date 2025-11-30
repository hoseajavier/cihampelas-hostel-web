import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Rooms from './pages/Rooms';
import Tour from "./pages/Tour";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
