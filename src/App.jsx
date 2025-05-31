import './App.css'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
