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
import Tutor from "../components/Tutor/Tutor.jsx";
import Faq from "../components/Faq/Faq.jsx";

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

      <AnimatedSection animation="slide-right">
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection animation="slide-left">
        <Tutor />
      </AnimatedSection>

      <AnimatedSection animation="slide-right">
        <Faq />
      </AnimatedSection>
    </>
  );
}

export default App;
