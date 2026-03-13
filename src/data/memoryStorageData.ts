import type { DotColorKey } from "../components/Dots/Dots";

export type StorageCategory = {
  name: string;
  percent: string;
  colorKey: DotColorKey;
};

export const DEFAULT_CATEGORIES: StorageCategory[] = [
  { name: "code & tech",        percent: "35%", colorKey: "orange" },
  { name: "coffee",             percent: "25%", colorKey: "blue"   },
  { name: "travel & adventures",percent: "20%", colorKey: "yellow" },
  { name: "art & creativity",   percent: "19%", colorKey: "pink"   },
];