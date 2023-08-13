import {FC, memo, useCallback, useMemo} from "react";
import "./ProfileHeader.scss";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetProfileReadOnly} from "../../selectors/GetProfileReadOnly/GetProfileReadOnly";
import {ProfileActions} from "../../model/slice/profileSlice";
import {ProfileUpdate} from "../../services/ProfileUpdate/ProfileUpdate";
import {useAppDispatch} from "../../../../app/providers/Store/config/store";

interface ProfileHeaderProps {
  className?: string,
}

const ProfileHeader: FC<ProfileHeaderProps> = memo(({className}) => {
  const { t } = useTranslation("profile");
  const ProfileReadOnly = useSelector(GetProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(ProfileActions.SetReadonly(false));
  },[dispatch]);

  const onCancel = useCallback(() => {
    dispatch(ProfileActions.CancelEdit());
  },[dispatch]);

  const onSend = useCallback(() => {

    return dispatch(ProfileUpdate());
  }, [dispatch])


  const SelectBtn = useMemo(() => {
    if(ProfileReadOnly) return <Button onClick={onEdit} theme={ThemeButtonEnum.OUTLINE}>{t("edit")}</Button>;
    return <>
      <Button onClick={onCancel} theme={ThemeButtonEnum.OUTLINE_RED}>{t("cancel")}</Button>
      <Button onClick={onSend} theme={ThemeButtonEnum.OUTLINE}>{t("send")}</Button>
    </>;
  }, [ProfileReadOnly, onEdit, onCancel, onSend, t]);

  return (
    <div className={ClassNames(`profile-header`, className)} data-testid="profile-header">
      <Text className="profile-header__h" theme={TextTheme.PRIMARY} title={t("profile page")}/>
      <div className="profile-header__interaction">
        {SelectBtn}
      </div>
    </div>
  )
})

export {ProfileHeader}