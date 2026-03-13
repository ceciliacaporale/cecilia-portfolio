import type { IconType } from "react-icons";
import type { DotColorKey } from "../components/Dots/Dots";
import { FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiStyledcomponents, SiTypescript, SiStrapi, SiTailwindcss, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export type SkillItem = {
  icon: IconType;
  name: string;
  favorite: boolean;
  colorKey: DotColorKey;
};

export const skillData: SkillItem[] = [
  { icon: FaJs,               name: "JavaScript",       favorite: true,  colorKey: "yellow"  },
  { icon: FaReact,            name: "React",            favorite: true,  colorKey: "blue"    },
  { icon: TbBrandNextjs,      name: "Next.js",          favorite: false, colorKey: "lime"    },
  { icon: SiTypescript,       name: "TypeScript",       favorite: true,  colorKey: "pink"    },
  { icon: SiTailwindcss,      name: "Tailwind CSS",     favorite: false, colorKey: "orange"  },
  { icon: FaCss3Alt,          name: "CSS",              favorite: false, colorKey: "purple"  },
  { icon: SiStyledcomponents, name: "Styled Components",favorite: false, colorKey: "pink10"  },
  { icon: SiStrapi,           name: "Strapi",           favorite: true,  colorKey: "yellow"  },
  { icon: SiPhp,              name: "PHP",              favorite: false, colorKey: "blue"    },
  { icon: FaGitAlt,           name: "Git",              favorite: false, colorKey: "lime"    },
];