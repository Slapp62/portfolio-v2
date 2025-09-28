import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const Social = () => {
  return (
    <div className="flex h-fit w-fit justify-center gap-5">
      <a className="link-hover" href="mailto:slapp62@gmail.com">
        {<IconMail size={35} />}
      </a>

      <a className="link-hover" href="https://wa.me/972584345797">
        {<IconBrandWhatsapp size={35} />}
      </a>

      <a
        className="link-hover"
        href="https://www.linkedin.com/in/simcha-lapp-0b4081106"
      >
        {<IconBrandLinkedin size={35} />}
      </a>
    </div>
  );
};

export default Social;
