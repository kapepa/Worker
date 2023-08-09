import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  memo,
  useCallback,
  useEffect,
} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {BgInputEnum, ColorInputEnum, Input} from "../../../../shared/ui/Input/Input";
import {ProfileKeyTypes, ProfileTypes} from "../../model/types/profileTypes";
import Loader from "../../../../shared/ui/Loader/Loader";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useDispatch} from "react-redux";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";

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
  const listProps: ProfileKeyTypes[] = ["firstname", "lastname", "username", "country", "city"];
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

  const PreInput: FC<{key: string, name: ProfileKeyTypes, type: HTMLInputTypeAttribute, value: string | boolean | undefined }> = ( property) => {
    const {key, name, type, value} = property;

    return (
      <Input
        key={key}
        label={name}
        name={name}
        theme={BgInputEnum.WHITE_BG}
        color={ColorInputEnum.WHITE_COLOR}
        value={value as string}
        placeholder={t(`placeholder.${name}`)}
        className="profile-card__input"
        type={type}
        readOnly={readonly}
        onChange={onChangeInput}
      />
    )
  }

  return (
    <div className={ClassNames("profile-card", "profile-card--border", className)} data-testid="profile-card">
      <div className="profile-card__area">
        { !!edit?.avatar && <Avatar className="profile-card__avatar" symbol={edit.firstname} src={edit.avatar} alt="avatar" size={250}/> }
        { !!edit &&
          listProps.map((name: ProfileKeyTypes, index: number) => {
            return PreInput({ key: `${name}-${index}`, name, type: "text", value: edit[name] })
          })
        }
      </div>
    </div>
  )
})

export {ProfileCard};