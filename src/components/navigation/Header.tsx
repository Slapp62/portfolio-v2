import { IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="header w-full text-stone-300">
      <nav className="text-xl p-3 gap-10 flex justify-around align-center mr-5 w-full">
        <div className="flex gap-10 px-10">
          <button><a className="link-hover scroll-smooth" href="#projects">Projects</a></button>
          <button><a className="link-hover scroll-smooth" href="#contact">Contact</a></button>
        </div>

        <div className="flex gap-5 items-center justify-center border border-gray-400 rounded-lg py-2 px-3">
          <a 
            className="link-hover" 
            href="mailto:slapp62@gmail.com">
            {<IconMail size={30}/>}
          </a>

          <a 
           className="link-hover" 
           href="https://wa.me/972584345797">
            {<IconBrandWhatsapp/>}
          </a>

          <a 
            className="link-hover" 
            href="https://www.linkedin.com/in/simcha-lapp-0b4081106">{<IconBrandLinkedin/>}
          </a>
        </div>
      </nav>
    </header>
  );
}