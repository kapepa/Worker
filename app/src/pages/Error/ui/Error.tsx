import "./Error.scss";
import Panel from "../../../widgets/Panel";
import {useTranslation} from "react-i18next";
import Sidebar from "../../../widgets/Sidebar";

function Error () {
  const { t } = useTranslation("error");

  return (
    <div className="error" data-testid="error">
      {t("error page 404")}
    </div>
  )
};

export default Error;