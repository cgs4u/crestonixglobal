import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Aboutus from "./components/pages/Aboutus";
import Services from "./components/pages/Services";
import Navbar from "./components/Navsection/Navbar";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact";
import Career from "./components/pages/Career";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./components/pages/Terms";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
