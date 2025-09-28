import type { Icon } from '@tabler/icons-react';

type TProjectDescription = {
  title: string;
  description: string;
  tech: {
    name: string;
    icon: Icon;
  }[];
};

type TProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

export type { TProject, TProjectDescription };
