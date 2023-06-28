import { useContext } from "react";
import {ThemeContext, ThemeEnum} from "../lib/ThemeContext";

interface UseThemeInterface {
  theme: ThemeEnum,
  toggleTheme: () => void;
}

const UseTheme = (): UseThemeInterface => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = ThemeEnum.DARK === theme ? ThemeEnum.NORMAL : ThemeEnum.DARK;
    setTheme(newTheme);
    window.localStorage.setItem("them", newTheme);
  }

  return { theme, toggleTheme };
}

export default UseTheme;