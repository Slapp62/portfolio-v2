import './App.css';
import ProjectSection from './components/sections/ProjectSection.tsx';
import { Hero } from './components/sections/Hero.tsx';
import { Footer } from './components/navigation/Footer.tsx';
import { Contact } from './components/sections/ContactForm.tsx';

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center lg:max-w-full lg:flex-row">
      <Hero />
      <div className="mx-auto flex max-w-[90%] flex-col gap-10 lg:mx-0 lg:mt-15 lg:ml-10 lg:w-[40%]">
        
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
