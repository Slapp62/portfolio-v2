import { IconMail, IconBrandWhatsapp, IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="footer mt-10 text-white  flex justify-center items-center gap-6 p-5 border-t border-gray-400">
      <p className="text-xl">
        Created by Simcha Lapp
      </p>
      <div className="flex gap-5 items-center justify-center text-gray-400 border border-gray-400 rounded-lg py-2 px-3">
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
    </footer>
  );
}