import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Admin/Dashboard";
import Signup from "./Pages/Admin/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Add from "./Pages/Admin/Add";
import Update from "./Pages/Admin/Update";

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

        <Route element={<ProtectedRoute/>}>
         <Route path="/Admin" element={<Dashboard/>}/>
         <Route path='/Add_Project' element={<Add/>}/>
         <Route path="/Update_Project/:id" element={<Update/>} />
        </Route>

        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
