import {ChangeEvent, FC, memo, MutableRefObject, useCallback} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/ui/Input/Input";
import {ProfileTypes} from "../../model/types/profileTypes";
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
  edit: ProfileTypes,
  readonly: boolean,
  refSend: MutableRefObject<HTMLButtonElement | null>
}

const ProfileCard: FC<ProfileCardProps> = memo(({className, edit, readonly, refSend}) => {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch<AppDispatch>();
  const { register, getFieldState, handleSubmit, formState: { errors } } = useForm<LoginTypes>({
    defaultValues: {
      "firstname": edit.firstname,
      "lastname": edit.lastname,
      "username": edit.username,
      "country": edit.country,
      "city": edit.city,
    }
  });

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

  const onSubmit: SubmitHandler<LoginTypes> = (data: LoginTypes) => {
    if(!Object.keys(errors).length) dispatch(ProfileUpdate());
  };

  return (
    <div className={ClassNames("profile-card", "profile-card--border", className)} data-testid="profile-card">
      <form className="profile-card__area" onSubmit={handleSubmit(onSubmit)} data-testid="form">
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
            <button ref={refSend} type="submit" style={{display: "none"}} data-testid="submit"/>
          </>
        }
      </form>
    </div>
  )
})

export {ProfileCard};