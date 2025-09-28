import { techStacks } from './techStacks';

export const fullStackDescription = {
  title: 'MERN Stack Projects',
  description: 'A collection of projects built using the MERN stack.',
  tech: techStacks.mern,
};

export const fullStackProjects = [
  {
    id: 'businessDirectory',
    title: 'Business Directory',
    description:
      'A website allowing business owners to advertise their company and services and allowing customers to create a list of their favorite companies.',
    image: './mern-images/mernStackSite.png',
    imageAlt: 'mernStackSite',
    link: 'https://mernstackproject-client.onrender.com/',
    github: 'https://github.com/Slapp62/mernStackProject',
    tech: ['HTML', 'CSS', 'JavaScript', 'MantineUI', 'Joi', 'Node.js', 'Express', 'React', 'MongoDB'],
  },
];

export { techStacks };
