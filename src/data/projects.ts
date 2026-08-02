import ceciImg from "../assets/imagem-em-construcao.png?url";
import boxShadow from "../assets/box-shadow.png?url";
import PsicologaImg from "../assets/psicologa-laura.png?url";
import Storybook from "../assets/storybook.png?url";
import Lucas from "../assets/lucasprof.png?url";
import Coreale from "../assets/coreale.png?url";

export const projects = [
  {
    id: "box-shadow-generator",
    title: "Box Shadow Generator",
    description: "Generate and copy custom CSS shadows with a real-time preview.",
    imageSrc: boxShadow,
    technologies: ["React", "TypeScript", "Vite", "Styled Components"],
    link: "https://github.com/ceciliacaporale/shadow-lab"
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Documentation for my portfolio components.",
    imageSrc: Storybook,
    technologies: ["React", "TypeScript", "Styled Components", "Storybook"],
    link: "https://storybook.cecicaporale.com/"
  },
     {
    id: "coreale",
    title: "Coreale",
    description: "Studio that designs and develops websites for businesses and independent professionals.",
    imageSrc: Coreale,
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://www.coreale.com.br/"
  },
  {
    id: "psychologist-laura-lacerda",
    title: "Psychologist Laura Lacerda",
    description: "Institutional website focused on psychologist Laura Lacerda's clinical practice. Features a welcoming design, easy navigation, and is fully responsive.",
    imageSrc: PsicologaImg,
    technologies: ["Astro", "Styled Components", "JavaScript"],
    link: "https://www.psicologalauralacerda.com.br"
  },
  {
    id: "prof-lucas-gomes",
    title: "Prof. Lucas Gomes",
    description: "Institutional website focused on Prof. Lucas Gomes's private tutoring. Features a modern design, intuitive navigation, and is fully responsive.",
    imageSrc: Lucas,
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://www.lucasgomesprof.com.br/"
  },
];