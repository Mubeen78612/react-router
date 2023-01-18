import React, { useEffect, useState } from "react";
import { Routes ,Route} from "react-router-dom";
import axios from "axios";
import FrontendLayout from "./layouts/FrontendLayout";
import About from "./assests/About";
import Home from "./assests/Home";
import Contact from "./assests/Contact";

export default function App() {
  const[data,setData]= useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((Response) => {
        setData(Response.data.products);
      })
      .catch((Error) => {
        console.log(Error);
      })
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route path="about" element={<About data={data} />} />
          <Route path="home" element={<Home data={data}/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
