type TProject = {
  id: string,
  title: string,
  description: string,
  image: string,
  imageAlt: string,
  link: string
};

type TProjectDescription = { 
  title: string,
  description: string,
  tech: {
    name: string,
    icon: React.ComponentType
  }[]
}

export type { TProject, TProjectDescription };