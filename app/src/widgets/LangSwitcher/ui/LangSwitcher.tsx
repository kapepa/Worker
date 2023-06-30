import React, {FC} from "react";
import "./LangSwitcher.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface LangSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  classNames?: string,
}

const LangSwitcher: FC<LangSwitcherProps> = ({classNames, ...otherProps}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }

  return (
    <>
      <Button
        onClick={changeLanguage}
        // theme={ThemeButtonEnum.CLEAR}
        className={ClassNames(classNames,)}
        {...otherProps}
      >
        {t("translate")}
      </Button>
      adasdas
    </>
  )
}

export default LangSwitcher;