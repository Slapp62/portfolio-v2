import './App.css';
import ProjectSection from './components/sections/ProjectSection.tsx';
import { Hero } from './components/sections/Hero.tsx';
import { Footer } from './components/navigation/Footer.tsx';
import { Contact } from './components/sections/ContactForm.tsx';
import { Button } from './components/ui/button.tsx';

function App() {
  return (
    <div
      id="app"
      className="mx-auto flex flex-col justify-center lg:gap-5 gap-20 3xl:w-[80%] lg:max-w-[90%] lg:flex-row"
    >
      <Hero />
      <div className="mx-auto flex max-w-[90%] flex-col gap-10 lg:mx-0 lg:mt-15 lg:ml-10 lg:w-[50%]">
        <ProjectSection />
        <Contact />
        <Button className="mx-auto w-fit px-10">
          <a href="#app">Back to Top</a>
        </Button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
