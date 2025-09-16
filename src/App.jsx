import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Socials";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";
import AboutUs from "./components/AboutUs";
import InteractiveMenu from "./components/Events";

import { AnimatedTooltip } from "./components/ui/Directors";
import ContactUs from "./components/ContactUs";
import ScrollCarousel from "./components/ServiceScroll";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatterLogoContainer from "./components/Testimonials";
import Testimonials from "./components/Testimonials";
import ArchitectureShowcase from "./components/Events";
import Portfolio from "./components/Events";
import PortfolioCard from "./components/Events";
import PortfolioSection from "./components/Events";
import SplitHero from "./components/Events";
import SouthSideStudios from "./components/Events";
// import DRVEvents from "./components/EventsServices";
import DRVSocials from "./components/Socials";

const tooltipItems = [
  {
    id: 1,
    name: "Debraj Roy",
    designation: "Director",
    image: "/img/profile-1.jpg",
  },
  {
    id: 2,
    name: "Sahil",
    designation: "Creative Head",
    image: "/img/profile-2.jpg",
  },
  {
    id: 3,
    name: "Gourab",
    designation: "Production Manager",
    image: "/img/profile-3.jpg",
  },
  {
    id: 4,
    name: "Bairagi",
    designation: "Marketing Lead",
    image: "/img/profile-4.jpg",
  },
];

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ContactPopup />
                <AboutUs />
                {/* <AnimatedTooltip items={tooltipItems} /> */}
                <ScrollCarousel />
                <Testimonials />
                {/* <Contact /> */}
              </>
            }
          />
          <Route path="/events" element={
            <>
             <Features />
             <PortfolioSection />
            </>
          }/>
          <Route path="/socials" element={
            <>
             <DRVSocials/>
            </>
          }/>

          {<Route path="/contact" element={<ContactUs />} />}
          {<Route path="/about" element={
            <>
            <AboutUs />
            <AnimatedTooltip items={tooltipItems} />
            </>
            } />}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;