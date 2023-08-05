import React, {FC, memo} from "react";
import "./ThemeSwitcher.scss";
import {UseTheme} from "../../../app/contexts/Theme";
import {ClassNames} from "../../lib/ClassNames";
import LightThemeIco from "../../assets/icons/theme-light.svg";
import DarkTheme from "../../assets/icons/theme-dark.svg";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import Button, {ThemeButtonEnum} from "../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({className}) => {
  const {theme, toggleTheme} = UseTheme();

  return (
    <Button
      className={ClassNames(className,)}
      onClick={toggleTheme}
      theme={ThemeButtonEnum.CLEAR}
    >
      {theme === ThemeEnum.NORMAL && <img src={LightThemeIco} alt={'Theme'}/>}
      {theme === ThemeEnum.DARK && <img src={DarkTheme} alt={'Theme'}/>}
    </Button>
  )
})

export default ThemeSwitcher;