import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Aboutus from "./components/pages/Aboutus";
import Services from "./components/pages/Services";
import Navbar from "./components/Navsection/Navbar";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
