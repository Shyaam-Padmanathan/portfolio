import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router
} from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import { BiChevronUpCircle } from "react-icons/bi";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      {/* <ScrollToTop /> */}
       <Home />
       <About/>
      </div>
      <BiChevronUpCircle id='scrollTop' size={50} className='scroll-top-icon' onClick={()=>ScrollToTop()}/>
      <Footer />
    </Router>
  );
}

export default App;