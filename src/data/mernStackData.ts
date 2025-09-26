import { techStacks } from "./techStacks";

export const fullStackDescription = {
  title: "MERN Stack Projects",
  description: "A collection of projects built using the MERN stack.",
  tech: techStacks.mern
}

export const fullStackProjects = [
    {
        id: 'businessDirectory',
        title: 'Business Directory',
        description: 'A website allowing business owners to advertise their company and services and allowing customers to create a list of their favorite companies.',
        image: './mernStackSite.png',
        imageAlt: 'equations',
        link: 'https://mernstackproject-client.onrender.com/',
    }
];

export { techStacks };
