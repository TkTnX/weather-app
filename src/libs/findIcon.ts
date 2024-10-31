import { weatherTypes } from "../constants";

export const findIcon = (name: string) => {
  return weatherTypes.find((el) => el.text.trim() === name.trim())?.icon;
};
