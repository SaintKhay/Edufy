import { useState } from "react";
import "./App.css";
import ScrollReveal from "./animations/ScrollReveal.jsx";

import Navbar from "../components/NavBar/NavBar.jsx";
import SubHero from "../components/Sub-Hero.jsx";
import About from "../components/About.jsx";
import Join from "../components/JoinUs/JoinUs.jsx";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Courses from "../components/Courses/Courses.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
      <About />
      <Join />
      <AboutUs />
      <Courses />
    </>
  );
}

export default App;
