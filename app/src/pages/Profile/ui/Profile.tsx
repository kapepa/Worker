import {FC, useEffect} from "react";
import "./Profile.scss";
import {useTranslation} from "react-i18next";
import {ProfileRequest} from "../../../entities/Profile";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";

const Profile: FC = function () {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(ProfileRequest());
  },[dispatch]);

  return (
    <div className="profile" data-testid="profile">
      {t("profile page")}
    </div>
  )
}

export { Profile };