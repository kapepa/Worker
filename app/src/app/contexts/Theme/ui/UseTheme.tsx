import {useContext} from "react";
import {ThemeContext, ThemeEnum} from "../lib/ThemeContext";

interface UseThemeInterface {
  theme: ThemeEnum,
  toggleTheme: () => void;
}

const UseTheme = (): UseThemeInterface => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = (theme: ThemeEnum) => {
    switch (theme) {
      case ThemeEnum.NORMAL : return ThemeEnum.DARK;
      case ThemeEnum.DARK : return ThemeEnum.ORANGE;
      case ThemeEnum.ORANGE: return ThemeEnum.NORMAL;
      default: return ThemeEnum.NORMAL;
    }
  }

  const toggleTheme = () => {
    const newTheme = switchTheme(theme);
    setTheme(newTheme);
    window.localStorage.setItem("them", newTheme);
  }

  return { theme, toggleTheme };
}

export default UseTheme;