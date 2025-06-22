import site1 from "../assets/site1.png";
import site2 from "../assets/site2.png";
import site3 from "../assets/site3.png";
import site4 from "../assets/site4.png";

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
    title: "Optimisation de Portfolio",
    image: site2,
    description:
      " Apprentissage des pratiques de SEO pour le referencement web. ",
    git: "https://github.com/heilea/P09-Nina-Carducci.git",
    skills: "HTML, Google Ligth House, Wave, GIMP",
  },
  {
    title: "724events",
    image: site3,
    description:
      "Un projet React avec des bugs a résoudre. Prise en main des test unitaire et fonctionnel. Reprise de la codebase d'un tiers. ",
    git: "https://github.com/heilea/P-10.git",
    skills: "Javascript, Jest, React Devtools",
  },
  {
    title: "Crazee Burger",
    image: site4,
    description:
      "Un projet fil rouge de la formation React en entreprise par ViDev. Le projet est en cours",
    git: "https://github.com/heilea/crazee-burger2.git",
    skills: "Javascript, Styled-components, Git, Fire Base",
  },
];
