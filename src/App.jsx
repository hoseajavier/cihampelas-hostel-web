import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Rooms from './pages/Rooms';
// import RoomDetailPage from "./pages/RoomDetailPage";
import Tour from "./pages/Tour";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
import Navbar from './components/navbar';
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
        {/* <Route path="/rooms/:slug" element={<RoomDetailPage />} /> */}
        <Route path="/tour" element={<Tour />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
