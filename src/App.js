import React from "react";
import Navbar from "./assests/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./assests/About";
import Home from "./assests/Home";
import Contact from "./assests/Contact";






function App() {
  return (
  <>
<Routes>
  <Route path="/" element={<Navbar/>} >
<Route path="about" element={<About/>}/>
<Route path="home" element={<Home/>}/>
<Route path="contact" element={<Contact/>}/>

</Route>
</Routes>
  </>
  );
    
}

export default App;
