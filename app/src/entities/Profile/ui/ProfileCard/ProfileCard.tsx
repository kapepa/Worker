import {ChangeEvent, FC, memo, MutableRefObject, useCallback, useEffect} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/ui/Input/Input";
import {ProfileTypes} from "../../model/types/profileTypes";
import Loader from "../../../../shared/ui/Loader/Loader";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useDispatch} from "react-redux";
import {LoadAvatar} from "../../../../widgets/LoadAvatar";
import {BgInputEnum} from "../../../../shared/const/BgInput";
import {ColorInputEnum} from "../../../../shared/const/ColorInputEnum";
import {Country} from "../../../Country";
import {Countries} from "../../../../shared/const/Countries";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginTypes} from "../../../../features/AuthByUsername";
import {ProfileUpdate} from "../../services/ProfileUpdate/ProfileUpdate";
import {AppDispatch} from "../../../../app/providers/Store/config/store";

interface ProfileCardProps {
  className?: string,
  profile: ProfileTypes | undefined,
  edit: ProfileTypes | undefined,
  isLoading: boolean,
  error?: string | undefined,
  readonly: boolean,
  refSend: MutableRefObject<HTMLButtonElement | null>
}

const ProfileCard: FC<ProfileCardProps> = memo(({className, profile, edit, isLoading, error, readonly, refSend}) => {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch<AppDispatch>();
  const { register, getFieldState, handleSubmit, reset, formState: { errors } } = useForm<LoginTypes>({
    defaultValues: {
      "firstname": profile!.firstname,
      "lastname": profile!.lastname,
      "username": profile!.username,
      "country": profile!.country,
      "city": profile!.city,
    }
  });

  useEffect(() => {
    if(!!profile && !edit){
      dispatch(ProfileActions.ProfileSetEdit(profile));
    }
  }, [dispatch, profile, edit, reset]);

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

  const onSubmit: SubmitHandler<LoginTypes> = (data: LoginTypes) => {
    dispatch(ProfileUpdate());
  };

  return (
    <div className={ClassNames("profile-card", "profile-card--border", className)} data-testid="profile-card">
      <form className="profile-card__area" onSubmit={handleSubmit(onSubmit)} >
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
          <>
            <Input
              type="text"
              minLength={4}
              required={true}
              name="firstname"
              label="firstname"
              register={register}
              readOnly={readonly}
              onChange={onChangeInput}
              errors={errors.firstname}
              className="profile-card__input"
              classNameAlert="profile-card__alert"
              getFieldState={getFieldState}
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR_INVERTED}
              placeholder={t(`placeholder.firstname`)}
            />
            <Input
              type="text"
              minLength={4}
              required={true}
              name="lastname"
              label="lastname"
              register={register}
              readOnly={readonly}
              onChange={onChangeInput}
              errors={errors.lastname}
              className="profile-card__input"
              classNameAlert="profile-card__alert"
              getFieldState={getFieldState}
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR_INVERTED}
              placeholder={t(`placeholder.lastname`)}
            />
            <Input
              type="text"
              minLength={4}
              required={true}
              name="username"
              label="username"
              register={register}
              readOnly={readonly}
              onChange={onChangeInput}
              errors={errors.username}
              className="profile-card__input"
              classNameAlert="profile-card__alert"
              getFieldState={getFieldState}
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR_INVERTED}
              placeholder={t(`placeholder.username`)}
            />
            <Country
              defaultVal={edit.country}
              selected={countrySelected}
              readOnly={readonly}
            />
            <Input
              type="text"
              minLength={4}
              required={true}
              name="city"
              label="city"
              register={register}
              readOnly={readonly}
              onChange={onChangeInput}
              errors={errors.city}
              className="profile-card__input"
              classNameAlert="profile-card__alert"
              getFieldState={getFieldState}
              theme={BgInputEnum.WHITE_BG}
              color={ColorInputEnum.WHITE_COLOR_INVERTED}
              placeholder={t(`placeholder.city`)}
            />
            <button ref={refSend} type="submit" style={{display: "none"}}/>
          </>
        }
      </form>
    </div>
  )
})

export {ProfileCard};