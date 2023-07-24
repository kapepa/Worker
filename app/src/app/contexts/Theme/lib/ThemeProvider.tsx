import React, {FC, ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextProvider, ThemeEnum} from "./ThemeContext";

interface ThemeProviderInterface {
  children: ReactNode;
}

const defaultTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum;

const ThemeProvider: FC<ThemeProviderInterface> = ({children}) => {
  const body = document.body;
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme || ThemeEnum.NORMAL);

  const defaultProps = useMemo<ThemeContextProvider>(() => {
    body.className = "app " + theme;
    return {theme, setTheme};
  }, [theme, body]);

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>
};

export default ThemeProvider;