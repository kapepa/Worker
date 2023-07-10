import React, {FC} from "react";
import "./LangSwitcher.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface LangSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  classNames?: string,
  isShort?: boolean,
}

const LangSwitcher: FC<LangSwitcherProps> = ({ classNames, isShort = false, ...otherProps }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }

  return (
    <>
      <Button
        onClick={changeLanguage}
        theme={ThemeButtonEnum.BACKGROUND_INVERTED}
        className={ClassNames(classNames,"test")}
        {...otherProps}
      >
        { isShort ? t("translate-short") : t("translate") }
      </Button>
    </>
  )
}


export default LangSwitcher;