import type { DotColorKey } from "../components/Dots/Dots";
import type { IconType } from "react-icons";
import { SiAdobeillustrator, SiGithub, SiOpenai } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";

export type SoftwareItem = {
  icon: IconType;
  name: string;
  colorKey: DotColorKey;
};

export const DEFAULT_SOFTWARES: SoftwareItem[] = [
  { icon: SiGithub,           name: "GitHub",      colorKey: "blue"   },
  { icon: FiFigma,            name: "Figma",       colorKey: "pink"   },
  { icon: SiOpenai,           name: "OpenAI",      colorKey: "orange" },
  { icon: FaDocker,           name: "Docker",      colorKey: "yellow" },
  { icon: SiAdobeillustrator, name: "Illustrator", colorKey: "lime"   },
  { icon: VscAzure,           name: "Azure",       colorKey: "pink10" },
];