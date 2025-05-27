import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './Pages/Home';
import Consulting from './Pages/Consulting';
import Contact from './Pages/Contact';
import Development from './Pages/Development';

export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/development" element={<Development />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}