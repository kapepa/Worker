import {FC} from "react";
import "./Profile.scss";
import Panel from "../../../widgets/Panel";
import Sidebar from "../../../widgets/Sidebar";
import {useTranslation} from "react-i18next";

const Profile: FC = function () {
  const { t } = useTranslation("profile")
  return (
    <div className="profile" data-testid="profile">
      <Panel/>
      <div className="content-page">
        <Sidebar className=""/>
        <main className="content-main profile__main">
          {t("profile page")}
        </main>
      </div>
    </div>
  )
}

export { Profile };