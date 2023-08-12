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
import {Input} from "../../../../shared/ui/Input/Input";
import {ProfileKeyTypes, ProfileTypes} from "../../model/types/profileTypes";
import Loader from "../../../../shared/ui/Loader/Loader";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useDispatch} from "react-redux";
import {LoadAvatar} from "../../../../widgets/LoadAvatar";
import {BgInputEnum} from "../../../../shared/const/BgInput";
import {ColorInputEnum} from "../../../../shared/const/ColorInputEnum";
import {Country} from "../../../Country";
import {Countries} from "../../../../shared/const/Countries";

interface ProfileCardProps {
  className?: string,
  profile: ProfileTypes | undefined,
  edit: ProfileTypes | undefined,
  isLoading: boolean,
  error?: string | undefined,
  readonly: boolean,
}

interface PreInputProps {
  key: string,
  name: ProfileKeyTypes,
  type: HTMLInputTypeAttribute,
  value: string | number | undefined | ProfileTypes[ProfileKeyTypes];
}

const ProfileCard: FC<ProfileCardProps> = memo(({className, profile, edit, isLoading, error, readonly}) => {
  const { t } = useTranslation("profile");
  const listProps: ProfileKeyTypes[] = ["firstname", "lastname", "username"];
  const dispatch = useDispatch();

  useEffect(() => {
    if(!!profile && !edit) dispatch(ProfileActions.ProfileSetEdit(profile))
  }, [dispatch, profile, edit]);

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    dispatch(ProfileActions.ProfileSetEdit({[target.name]: target.value}));
  }, [dispatch]);

  const onChangeAvatar = (file: File) => {
    dispatch(ProfileActions.ProfileSetEdit({avatar: file}));
  }

  const countrySelected = useCallback((str: Countries) => {
    dispatch(ProfileActions.ProfileSetEdit({country: str}));
  }, [dispatch])

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

  const PreInput: FC<PreInputProps> = ({key, name, type, value}) => {
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
        { !!edit?.avatar &&
          <LoadAvatar
            className="profile-card__avatar"
            symbol={edit.firstname}
            src={edit.avatar}
            onChangeAvatar={onChangeAvatar}
            alt="avatar"
            size={250}
            readOnly={readonly}
          />
        }
        { !!edit &&
          listProps.map((name: ProfileKeyTypes, index: number) => {
            return PreInput({ key: `${name}-${index}`, name, type: "text", value: edit[name]})
          })
        }
        { !!edit &&
          <Country defaultVal={edit.country} selected={countrySelected} readOnly={readonly}/>
        }
        { edit?.city !== undefined &&
          PreInput({ key: `city`, name: "city", type: "text", value: edit.city})
        }
      </div>
    </div>
  )
})

export {ProfileCard};