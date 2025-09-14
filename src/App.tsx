import './App.css'
import ProjectSection from './sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Header } from './navigation/Header'
import { Footer } from './navigation/Footer'
import {Contact} from './components/ContactForm.tsx'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <ProjectSection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
