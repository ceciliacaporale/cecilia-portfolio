import type { IconType } from "react-icons";
import type { DotColorKey } from "../components/Dots/Dots";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

export type SocialItem = {
  id: string;
  icon: IconType;
  label: string;
  url: string;
  colorKey: DotColorKey;
};

export const DEFAULT_SOCIAL_ITEMS: SocialItem[] = [
  {
    id:       "github",
    icon:     FaGithubAlt,
    label:    "GitHub",
    url:      "https://github.com/ceciliacaporale",
    colorKey: "pink",
  },
  {
    id:       "linkedin",
    icon:     AiOutlineLinkedin,
    label:    "LinkedIn",
    url:      "https://www.linkedin.com/in/mariaceciliacaporale/",
    colorKey: "blue",
  },
  {
    id:       "email",
    icon:     MdOutlineEmail,
    label:    "E-mail",
    url:      "mailto:cecicaporale16@gmail.com",
    colorKey: "yellow",
  },
  {
    id:       "medium",
    icon:     FaMedium,
    label:    "Medium",
    url:      "https://medium.com/@cecicaporale16",
    colorKey: "lime",
  },
];