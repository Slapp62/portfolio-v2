import './App.css'
import ProjectSection from './components/sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Footer } from './components/navigation/Footer.tsx'
import {Contact} from './components/ContactForm.tsx'
import LeftSide from './components/LeftSide.tsx'
import RightSide from './components/RightSide.tsx'

function App() {

  return (
    <div className='w-full h-full'>
      <LeftSide>
        <Hero/>
      </LeftSide>

      <RightSide>
        <ProjectSection/>
        <Contact/>
        <Footer/>
      </RightSide>
    </div>
  )
}

export default App
