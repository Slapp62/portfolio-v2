import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Social from './Social';

export const Hero = () => {
  return (
    <div className="hero top-0 mx-auto mt-5 flex w-[95%] flex-col items-center justify-center gap-5 overflow-hidden lg:sticky lg:mx-0 lg:mt-0 lg:h-screen lg:w-[40%]">
      <nav className="w-full lg:w-[90%] ">
        <ul className="flex flex-row justify-center gap-5 font-bold text-emerald-100 text-xl">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 2.5 },
        }}
        className="flex flex-col items-center gap-10 rounded-lg border-1 border-slate-500 p-5 text-white justify-evenly lg:h-[80%] lg:gap-0"
      >
        <div className="flex w-full flex-col gap-4 lg:w-[90%]">
          <h1 className="text-3xl font-bold text-center lg:text-5xl">
            Simcha Lapp
          </h1>
          <h2 className="text-lg font-semibold text-center text-indigo-300 lg:text-xl">
            Full Stack Web Developer
          </h2>
          <ul className="w-full text-xs leading-7 lg:text-sm">
            <li className="">
              I am a junior full stack web developer who enjoys solving problems
              and and pushing my limits. I focus on building useful applications
              with inutitve and beautiful frontends and scalable backends.
            </li>
            <li>
              I have recently completed a Full Stack Web Development course at
              HackerU and am progressively broadening my horizons with bigger
              challenges. I began with landing pages in HTML and CSS, moved on
              to simple Javascript apps, and now completed a MERN stack website.
            </li>
            <li>
              My next project is going to be a functional full stack website
              that can be launched to the public and provide real value to
              users.
            </li>
            <li>
              My current skills include: HTML, CSS, Javascript, Typescript,
              React, MantineUI, Tailwind, Node.js, Express, MongoDB, and
              Mongoose
            </li>
          </ul>
        </div>
        
        <Button
          asChild
          className="px-20 py-5 mx-auto text-lg button-outline w-fit"
        >
          <a href="./Simcha Lapp Resume 2025 (Updated).pdf" target="_blank">
            View Resume
          </a>
        </Button>

        <Social />
      </motion.div>
    </div>
  );
};
