import {ChangeEvent, FC, memo, useCallback, useEffect} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {BgInputEnum, ColorInputEnum, Input} from "../../../../shared/ui/Input/Input";
import {ProfileTypes} from "../../model/types/profileTypes";
import Loader from "../../../../shared/ui/Loader/Loader";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useDispatch} from "react-redux";

interface ProfileCardProps {
  className?: string,
  profile: ProfileTypes | undefined,
  edit: ProfileTypes | undefined,
  isLoading: boolean,
  error?: string | undefined,
  readonly: boolean,
}

const ProfileCard: FC<ProfileCardProps> = memo(({className, profile, edit, isLoading, error, readonly}) => {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch();

  useEffect(() => {
    if(!!profile && !edit) dispatch(ProfileActions.ProfileSetEdit(profile))
  }, [dispatch, profile, edit]);

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    dispatch(ProfileActions.ProfileSetEdit({[target.name]: target.value}))
  }, [dispatch]);

  if(isLoading) return (
    <div className={ClassNames("profile-card", "profile-card--loader", className)} data-testid="profile-card">
      <Loader/>
    </div>
  )

  if(!!error) return (
    <div className={ClassNames("profile-card", "profile-card--error", className)} data-testid="profile-card">
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t("error-profile")}
      />
    </div>
  )

  return (
    <div className={ClassNames("profile-card", "profile-card--border", className)} data-testid="profile-card">
      <div className="profile-card__area">
        { !!edit &&
          <>
            <Input
              label={"firstname"}
              name="firstname"
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR}
              value={edit.firstname}
              placeholder={t("placeholder.firstname")}
              className="profile-card__input"
              type="text"
              readOnly={readonly}
              onChange={onChangeInput}
            />
            <Input
              label={"lastname"}
              name="lastname"
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR}
              value={edit.lastname}
              placeholder={t("placeholder.lastname")}
              className="profile-card__input"
              type="text"
              readOnly={readonly}
              onChange={onChangeInput}
            />
          </>
        }
      </div>
    </div>
  )
})

export {ProfileCard};