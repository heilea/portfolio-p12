import site1 from "../../src/assets/site1.png";
import site2 from "../../src/assets/site2.png";

type Project = {
  title: string;
  image: string;
  description: string;
  git: string;
  skills: string;
};

export const projects: Project[] = [
  {
    title: "ArgentBank",
    image: site1,
    description:
      "Mon projet le plus lourd avec OpenClassroom. Il intègre la gestion du state et l'autentification.",
    git: "https://github.com/heilea/P11-ArgentBank.git",
    skills: "Typescript, Redux, Sass ",
  },
  {
    title: "Crazee Burger",
    image: site2,
    description:
      "Un projet fil rouge de la formation React en entreprise de Vi Dev. J'ai appris les fondamentaux de react et les bonnes pratiques en entreprise. ",
    git: "https://github.com/heilea/crazee-burger2.git",
    skills: "Javascript, Styled-components, Git, Fire Base",
  },
];
