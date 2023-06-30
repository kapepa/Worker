import "./Error.scss";
import Navbar from "../../../widgets/Navbar";
import {useTranslation} from "react-i18next";
import Sidebar from "../../../widgets/Sidebar";

function Error () {
  const { t } = useTranslation("error");

  return (
    <div className="error">
      <Navbar/>
      <div className="content-page">
        <Sidebar className=""/>
        <main>
          {t("error page 404")}
        </main>
      </div>
    </div>
  )
}

export default Error;