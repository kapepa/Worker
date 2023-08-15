import {FC} from "react";
import "./About.scss";
import {useTranslation} from "react-i18next";
import Navbar from "../../../widgets/Navbar";

const About: FC = () => {
  const { t } = useTranslation("about");

  return (
    <div className="about" data-testid="about">
      {t("about page")}
    </div>
  )
};

export {About};