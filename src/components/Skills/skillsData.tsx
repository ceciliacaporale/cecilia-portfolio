import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt 
  } from "react-icons/fa"; 
  import { 
    SiStyledcomponents, SiTypescript, SiStrapi, SiStorybook 
  } from "react-icons/si";
  import { TbBrandNextjs } from "react-icons/tb";

  export const skillData = [
    { icon: <FaJs />, name: "JavaScript", favorite: true },
    { icon: <FaReact />, name: "React", favorite: true },
    { icon: <TbBrandNextjs />, name: "Next.js", favorite: false },
    { icon: <SiTypescript />, name: "TypeScript", favorite: true },
    { icon: <FaHtml5 />, name: "HTML", favorite: false },
    { icon: <FaCss3Alt />, name: "CSS", favorite: false },
    { icon: <SiStyledcomponents />, name: "Styled Components", favorite: false },
    { icon: <SiStrapi />, name: "Strapi", favorite: true },
    { icon: <SiStorybook />, name: "Storybook", favorite: false },
    { icon: <FaGitAlt />, name: "Git", favorite: false },
  ];
  