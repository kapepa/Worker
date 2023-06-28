import React from "react";

export enum ThemeEnum {
  DARK = "dark",
  NORMAL = "normal",
}

export interface ThemeContextProvider {
  theme: ThemeEnum,
  setTheme: (theme: ThemeEnum) => void;
}

export const ThemeContext = React.createContext<ThemeContextProvider>({theme: ThemeEnum.NORMAL, setTheme: () => {}});
export const LOCAL_STORAGE_THEME_KEY = "them";
