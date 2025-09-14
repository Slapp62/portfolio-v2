import './App.css'
import ProjectSection from './sections/ProjectSection.tsx'
import { Hero } from './components/Hero'
import { Header } from './navigation/Header'
import { Footer } from './navigation/Footer'

function App() {

  return (
    <>
      <Header/>

      <Hero/>

      <ProjectSection/>

      <Footer/>
    </>
  )
}

export default App
