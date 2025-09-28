import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const Social = () => {
  return (
    <div className="mx-auto flex h-fit w-fit items-center justify-center gap-5 px-3 py-2">
      <a className="link-hover" href="mailto:slapp62@gmail.com">
        {<IconMail size={30} />}
      </a>

      <a className="link-hover" href="https://wa.me/972584345797">
        {<IconBrandWhatsapp />}
      </a>

      <a
        className="link-hover"
        href="https://www.linkedin.com/in/simcha-lapp-0b4081106"
      >
        {<IconBrandLinkedin />}
      </a>
    </div>
  );
};

export default Social;
