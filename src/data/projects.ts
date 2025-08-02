import ceciImg from "../assets/imagem-em-construcao.png?url";
import boxShadow from "../assets/box-shadow.png?url";
import PsicologaImg from "../assets/psicologa-laura.png?url";

export const projects = [
  {
    title: "Box Shadow Generator",
    description: "Gere e copie sombras CSS personalizadas com visualização em tempo real.",
    imageSrc: boxShadow,
    technologies: ["React", "TypeScript", "Vite", "Styled Components"],
    link: "https://github.com/ceciliacaporale/shadow-lab"
  },
  {
    title: "Psicóloga Laura Lacerda",
    description: "Site institucional com foco na atuação clínica da psicóloga Laura Lacerda. Visual acolhedor, fácil navegação e responsivo.",
    imageSrc: PsicologaImg,
    technologies: ["Astro", "Styled Components", "JavaScript"],
    link: "https://www.psicologalauralacerda.com.br"
  },
  {
    title: "Em Construção",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: ceciImg,
    technologies: ["Next.js", "Tailwind", "JavaScript"],
  },
  {
    title: "Em Construção",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: ceciImg,
    technologies: ["Astro", "Tailwind", "JavaScript"],
  },
];