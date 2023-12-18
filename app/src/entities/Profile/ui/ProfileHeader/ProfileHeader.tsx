import {FC, memo, useCallback, useMemo} from "react";
import "./ProfileHeader.scss";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useAppDispatch} from "../../../../app/providers/Store/config/store";
import {GetProfile} from "../../selectors/GetProfile/GetProfile";
import {GetUsersProfile} from "../../../Users";

interface ProfileHeaderProps {
  className?: string,
  onSend?: () => void,
}

const ProfileHeader: FC<ProfileHeaderProps> = memo(({className, onSend}) => {
  const { t } = useTranslation("profile");
  const { readonly, data } = useSelector(GetProfile);
  const user = useSelector(GetUsersProfile);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(ProfileActions.SetReadonly(false));
  },[dispatch]);

  const onCancel = useCallback(() => {
    dispatch(ProfileActions.CancelEdit());
  },[dispatch]);

  const SelectBtn = useMemo(() => {
    if(data?.id === user?.id) {
      if(readonly){
        return <Button
          onClick={onEdit}
          className="profile-header__edit"
          theme={ThemeButtonEnum.OUTLINE}
        >{t("edit")}</Button>
      };

      return <>
        <Button
          onClick={onCancel}
          className="profile-header__cancel"
          theme={ThemeButtonEnum.OUTLINE_RED}
        >{t("cancel")}</Button>
        <Button
          onClick={onSend}
          type="submit"
          className="profile-header__submit"
          theme={ThemeButtonEnum.OUTLINE}
        >{t("send")}</Button>
      </>;
    }
  }, [readonly, onEdit, onCancel, onSend, t, data?.id, user?.id]);

  return (
    <div className={ClassNames(`profile-header`, className)} data-testid="profile-header">
      <Text className="profile-header__h" theme={TextTheme.PRIMARY} title={t("profile page")}/>
      <div className="profile-header__interaction">
        {SelectBtn}
      </div>
    </div>
  )
});

export {ProfileHeader}