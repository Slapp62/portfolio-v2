import './App.css'
import ProjectSection from './components/sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Footer } from './components/navigation/Footer.tsx'
import {Contact} from './components/ContactForm.tsx'

function App() {

  return (
    <div className="flex lg:flex-row flex-col gap-10 justify-center lg:max-w-full lg:mt-15 ">
      <Hero/>
      <div className="lg:w-[40%] max-w-[90%] lg:mx-0 mx-auto flex flex-col gap-10 lg:ml-10">
        <ProjectSection/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
