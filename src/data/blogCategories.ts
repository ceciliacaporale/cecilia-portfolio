import type { ColorKey } from "../styles/theme";

export interface BlogCategory {
  id: string;
  label: string;
  description: string;
  /** Base palette color — used for the folder's tooltip and post tags. */
  colorKey: ColorKey;
  /** Lighter tint used for the folder icon itself on /files. */
  folderColorKey: ColorKey;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "frameworks",
    label: "Frameworks & Tools",
    description: "Frameworks, libraries and tools I'm learning or using.",
    colorKey: "pink",
    folderColorKey: "pinkLight",
  },
  {
    id: "notes",
    label: "Notes",
    description: "Study notes and things I don't want to forget.",
    colorKey: "blue",
    folderColorKey: "blueLight",
  },
  {
    id: "thoughts",
    label: "Thoughts",
    description: "Opinions and reflections on being a developer.",
    colorKey: "yellow",
    folderColorKey: "yellowLight",
  },
];

export const getCategoryById = (id: string): BlogCategory | undefined =>
  blogCategories.find((category) => category.id === id);
