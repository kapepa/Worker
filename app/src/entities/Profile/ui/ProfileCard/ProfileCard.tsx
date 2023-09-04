import {ChangeEvent, FC, memo, MutableRefObject, useCallback} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import {ProfileTypes} from "../../model/types/profileTypes";
import {ProfileActions} from "../../model/slice/profileSlice";
import {useDispatch} from "react-redux";
import {LoadAvatar} from "../../../../widgets/LoadAvatar";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {Country} from "../../../Country";
import {Countries} from "../../../../shared/const/Countries";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {LoginTypes} from "../../../../features/AuthByUsername";
import {ProfileUpdate} from "../../services/ProfileUpdate/ProfileUpdate";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {InputDynamic} from "../../../../widgets/InputDynamic";

interface ProfileCardProps {
  className?: string,
  edit: ProfileTypes,
  readonly: boolean,
  refSend: MutableRefObject<HTMLButtonElement | null>
}

const ProfileCard: FC<ProfileCardProps> = memo(({className, edit, readonly, refSend}) => {
  const { t } = useTranslation("profile");
  const dispatch = useDispatch<AppDispatch>();
  const methods = useForm<LoginTypes>({
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
    if(!Object.keys(methods.formState.errors).length) dispatch(ProfileUpdate());
  };

  return (
    <div className={ClassNames("profile-card", "profile-card--border", className)} data-testid="profile-card">
      <FormProvider {...methods} >
      <form className="profile-card__area" onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
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
            <InputDynamic
              type="text"
              name={"firstname"}
              label={t("label.firstname")}
              placeholder={t(`placeholder.firstname`)}
              readOnly={readonly}
              classInput="profile-card__input"
              validation={{
                required: { value: true, message: t("validation.firstname.required") },
                minLength: { value: 3, message: t("validation.firstname.minLength") }
               }}
              defaultValue={edit.firstname}
              onChange={onChangeInput}
              themeInput={BgEnum.BG_COLOR}
            />
            <InputDynamic
              type="text"
              name={"lastname"}
              label={t("label.lastname")}
              placeholder={t(`placeholder.lastname`)}
              readOnly={readonly}
              classInput="profile-card__input"
              validation={{
                required: { value: true, message: t("validation.lastname.required") },
                minLength: { value: 3, message: t("validation.lastname.minLength") }
              }}
              defaultValue={edit.lastname}
              onChange={onChangeInput}
              themeInput={BgEnum.BG_COLOR}
            />
            <InputDynamic
              type="text"
              name={"username"}
              label={t("label.username")}
              placeholder={t(`placeholder.username`)}
              readOnly={readonly}
              classInput="profile-card__input"
              validation={{
                required: { value: true, message: t("validation.username.required") },
                minLength: { value: 3, message: t("validation.username.minLength") }
              }}
              defaultValue={edit.username}
              onChange={onChangeInput}
              themeInput={BgEnum.BG_COLOR}
            />
            <Country
              label={t("label.country")}
              defaultVal={edit.country}
              selected={countrySelected}
              readOnly={readonly}
              className="profile-card__input"
            />
            <InputDynamic
              type="text"
              name={"city"}
              label={t("label.city")}
              placeholder={t(`placeholder.city`)}
              readOnly={readonly}
              classInput="profile-card__input"
              validation={{
                required: { value: true, message: t("validation.city.required") },
                minLength: { value: 3, message: t("validation.city.minLength") }
              }}
              defaultValue={edit.city}
              onChange={onChangeInput}
              themeInput={BgEnum.BG_COLOR}
            />
            <button ref={refSend} type="submit" style={{display: "none"}} data-testid="submit"/>
          </>
        }
      </form>
      </FormProvider>
    </div>
  )
})

export {ProfileCard};