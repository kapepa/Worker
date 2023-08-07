import "./Error.scss";
import {useTranslation} from "react-i18next";

function Error () {
  const { t } = useTranslation("error");

  return (
    <div className="error" data-testid="error">
      {t("error page 404")}
    </div>
  )
};

export default Error;