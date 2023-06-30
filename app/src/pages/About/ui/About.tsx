import {FC} from "react";
import "./About.scss";
import Navbar from "../../../widgets/Navbar";
import {useTranslation} from "react-i18next";
import Sidebar from "../../../widgets/Sidebar";

const About: FC = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <Navbar/>
      <div className="content-page">
        <Sidebar className=""/>
        <main>
          {t("about page")}
        </main>
      </div>
    </div>
  )
}

export default About;