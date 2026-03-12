import { 
  FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt 
} from "react-icons/fa"; 

import { 
  SiStyledcomponents, 
  SiTypescript, 
  SiStrapi, 
  SiTailwindcss,
  SiPhp
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";

export const skillData = [
  { icon: <FaJs />, name: "JavaScript", favorite: true },
  { icon: <FaReact />, name: "React", favorite: true },
  { icon: <TbBrandNextjs />, name: "Next.js", favorite: false },
  { icon: <SiTypescript />, name: "TypeScript", favorite: true },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", favorite: false }, // substitui HTML
  { icon: <FaCss3Alt />, name: "CSS", favorite: false },
  { icon: <SiStyledcomponents />, name: "Styled Components", favorite: false },
  { icon: <SiStrapi />, name: "Strapi", favorite: true },
  { icon: <SiPhp />, name: "PHP", favorite: false }, // substitui Storybook
  { icon: <FaGitAlt />, name: "Git", favorite: false },
];