import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx"

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Footer.css";
import "./styles/Contact.css";
import "./styles/mediaquery.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
