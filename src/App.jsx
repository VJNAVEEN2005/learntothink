import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "motion/react";
import ArticlePage from "./components/ArticlePage";

function App() {
  const location = useLocation();

  const [isDark, setIsDark] = useState(true);

  function changeMode() {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className=" dark:bg-sky-950">
        <Navbar onChangeMode={changeMode} isDark={isDark}/>
      </div>

      <div className=" -z-10 w-full h-full dark:bg-Secondary-black bg-white"></div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:category/:id" element={<ArticlePage/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;


