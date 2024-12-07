import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Slide from "./components/Slide.jsx";
import Portfolio from "./components/Portfolio.jsx";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Slide />
      <Contact/>
      <Footer/>
    </>
  )
}