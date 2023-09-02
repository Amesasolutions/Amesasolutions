import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
