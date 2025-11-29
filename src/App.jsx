import { useState } from "react";
import "./App.css";

import Navbar from "../components/NavBar/NavBar.jsx";
import SubHero from "../components/Sub-Hero.jsx";
import About from "../components/About.jsx";
import Join from "../components/JoinUs/JoinUs.jsx";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Courses from "../components/Courses/Courses.jsx";
import Learn from "../components/Learn/Learn.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import Testimonials from "../components/Testimonial/Testimonial.jsx";
import Head from "../components/Head.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection animation="slide-right">
        <SubHero />
      </AnimatedSection>

      <AnimatedSection animation="slide-right">
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Join />
      </AnimatedSection>

      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>

      <AnimatedSection>
        <Courses />
      </AnimatedSection>

      <AnimatedSection>
        <Learn />
      </AnimatedSection>

      <Testimonials />
    </>
  );
}

export default App;
