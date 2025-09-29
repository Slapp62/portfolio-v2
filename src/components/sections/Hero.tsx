import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Social from './Social';

export const Hero = () => {
  return (
    <div className="hero top-0 mx-auto mt-5 flex w-[95%] flex-col items-center justify-center gap-5 overflow-hidden lg:sticky lg:mx-0 lg:mt-0 lg:h-screen lg:w-[40%]">
      {/* <nav className="w-full lg:w-[90%]">
        <ul className="flex flex-row justify-center gap-5 font-bold text-emerald-100  text-xl">
          <li>
            <a href="#projects" className='hover:text-emerald-500 duration-300'>Projects</a>
          </li>
          <li>
            <a href="#contact" className='hover:text-emerald-500 duration-300'>Contact</a>
          </li>
        </ul>
      </nav> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 2.5 },
        }}
        className="flex flex-col justify-evenly gap-10 text-white lg:h-[80%] lg:gap-5"
      >
        <div className="flex h-full w-full flex-col gap-4 p-5 lg:p-0">
          <h1 className="text-center text-3xl font-bold lg:text-start lg:text-5xl">
            Simcha Lapp
          </h1>
          <h2 className="text-center text-lg font-semibold text-indigo-300 lg:text-start lg:text-xl">
            Full Stack Web Developer
          </h2>
          <ul className="flex lg:w-[90%] w-full flex-col gap-3 text-xs leading-7 text-zinc-200 lg:text-sm lg:text-start text-center">
            <li>
              I am a junior full stack web developer who enjoys solving problems
              and pushing my limits. I focus on building useful applications
              with inutitve, beautiful frontends and scalable backends.
            </li>
            <li>
              I recently completed a Full Stack Web Development course at
              HackerU and am progressively broadening my horizons with bigger
              challenges. I began with landing pages in HTML and CSS, moved on
              to simple Javascript apps, and now completed a functional MERN
              stack website.
            </li>
            <li>
              I plan for my next project to be a website that can be launched to the
              public and provide real value to users.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <Button
            asChild
            className="button-outline mx-auto w-fit px-20 py-5 text-lg lg:mx-0"
          >
            <a href="./Simcha Lapp Resume (Updated 09.25).pdf" target="_blank">
              View Resume
            </a>
          </Button>

          <Social />
        </div>
      </motion.div>
    </div>
  );
};
