import {FC, memo, useCallback, useMemo} from "react";
import "./ProfileHeader.scss";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {GetProfileReadOnly} from "../../selectors/GetProfileReadOnly/GetProfileReadOnly";
import {ProfileActions} from "../../model/slice/profileSlice";

interface ProfileHeaderProps {
  className?: string,
}

const ProfileHeader: FC<ProfileHeaderProps> = memo(({className}) => {
  const { t } = useTranslation("profile");
  const ProfileReadOnly = useSelector(GetProfileReadOnly);
  const dispatch = useDispatch();

  const onEdit = useCallback(() => {
    dispatch(ProfileActions.SetReadonly(false));
  },[dispatch]);

  const onCancel = useCallback(() => {
    dispatch(ProfileActions.CancelEdit());
  },[dispatch]);

  const SelectBtn = useMemo(() => {
    if(ProfileReadOnly) return <Button onClick={onEdit} theme={ThemeButtonEnum.OUTLINE}>{t("edit")}</Button>;
    return <Button onClick={onCancel} theme={ThemeButtonEnum.OUTLINE}>{t("cancel")}</Button>;
  }, [ProfileReadOnly, onEdit, onCancel, t]);

  return (
    <div className={ClassNames(`profile-header`, className)}>
      <Text className="profile-header__h" theme={TextTheme.PRIMARY} title={t("profile page")}/>
      <div className="profile-header__interaction">
        {SelectBtn}
      </div>
    </div>
  )
})

export {ProfileHeader}