import react from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Register from './Component/Register'
import Error from './Component/Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const APP = () => {
  return (
    <>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </Router>

    </>
  )
}
export default APP;