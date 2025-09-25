import './App.css'
import ProjectSection from './components/sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Header } from './components/navigation/Header.tsx'
import { Footer } from './components/navigation/Footer.tsx'
import {Contact} from './components/ContactForm.tsx'

function App() {

  return (
    <>
      <div className="bg-image">
        <Header/>
        <Hero/>
      </div>
      <ProjectSection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
