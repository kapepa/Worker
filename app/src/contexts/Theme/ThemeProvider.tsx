import React, {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextProvider, ThemeEnum} from "./ThemeContext";

interface ThemeProviderInterface {
  children: React.ReactNode;
}

const defaultTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum;

const ThemeProvider: FC<ThemeProviderInterface> = ({children}) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme || ThemeEnum.NORMAL);

  const defaultProps = useMemo<ThemeContextProvider>(() => {
    return {theme, setTheme};
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeProvider;