import './App.css'
import ProjectSection from './components/sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Footer } from './components/navigation/Footer.tsx'
import {Contact} from './components/ContactForm.tsx'
import RightSide from './components/RightSide.tsx'

function App() {

  return (
    <div className="flex lg:flex-row flex-col justify-center max-w-full mt-15">
      <Hero/>
      <RightSide>
        <ProjectSection/>
        <Contact/>
        <Footer/>
      </RightSide>
    </div>
  )
}

export default App
