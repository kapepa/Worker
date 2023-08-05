import React, {FC, memo} from "react";
import "./ErrorPage.scss";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../Button/Button";

const ErrorPage: FC = memo(() => {
  const { t } = useTranslation();

  const reloadPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.location.reload();
  }

  return(
    <div className="error-page" data-testid="error">
      <p className="error-page__desc">{t("refresh-page")}</p>
      <Button theme={ThemeButtonEnum.CLEAR} onClick={reloadPage}>
        {t("refresh-page")}
      </Button>
    </div>
  )
})

export default ErrorPage;