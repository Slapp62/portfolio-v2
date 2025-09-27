import { IconMail, IconBrandWhatsapp, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {
  return (
    <div className="flex gap-5 items-center justify-center py-2 px-3 h-fit w-fit mx-auto">
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
  );
};

export default Social;