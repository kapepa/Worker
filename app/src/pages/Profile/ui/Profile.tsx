import {FC, useCallback, useEffect, useRef} from "react";
import "./Profile.scss";
import {GetProfile, ProfileActions, ProfileCard, ProfileHeader, ProfileRequest} from "../../../entities/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {ClassNames} from "../../../shared/lib/ClassNames";
import Loader from "../../../shared/ui/Loader/Loader";
import {Text, TextAlign, TextTheme} from "../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";

const Profile: FC = function () {
  const { t } = useTranslation("profile");
  const refSend = useRef<HTMLButtonElement>(null)
  const dispatch = useDispatch<AppDispatch>();
  const { data, edit, loading, error, readonly } = useSelector(GetProfile);

  const onSend = useCallback(() => {
    if(refSend.current) refSend.current.click();
  }, [refSend]);

  useEffect(() => {
    if(!data) dispatch(ProfileRequest());
  },[dispatch, data]);

  useEffect(() => {
    if(!!data && !edit) dispatch(ProfileActions.ProfileSetEdit(data));
  }, [dispatch, data, edit]);

  if(loading) return (
    <div className={ClassNames("profile", "profile--loader")} data-testid="profile">
      <Loader/>
    </div>
  )

  if(!!error) return (
    <div className={ClassNames("profile", "profile--error")} data-testid="error">
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t("error-profile")}
      />
    </div>
  )

  return (
    <div className="profile" data-testid="profile">
      {!!edit &&
        <>
          <ProfileHeader onSend={onSend} />
          <ProfileCard edit={edit} readonly={readonly} refSend={refSend}/>
        </>
      }
    </div>
  )
}

export { Profile };