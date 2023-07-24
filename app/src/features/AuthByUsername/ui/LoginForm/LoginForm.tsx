import {FC} from "react";
import "./LoginForm.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {BgInputEnum, ColorInputEnum, Input} from "../../../../shared/ui/Input/Input";

interface LoginFormProps {
  className?: string,
}

export interface IFormValuesLogin {
  name: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({className}) => {
  const {t} = useTranslation();
  const { register, handleSubmit, getFieldState, formState: { errors } } = useForm<IFormValuesLogin>();
  const onSubmit: SubmitHandler<IFormValuesLogin> = data => {
    if(!errors){
      console.log(data)
    }
  };

  return (
    <div className={ClassNames(className, "login-form__wrapper")} data-testid="login-form">
      <h4 className="login-form__h">{t("login-form.login")}</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <Input
          placeholder={t("login-form.placeholder-user")}
          label={"name"}
          type="text"
          name="name"
          getFieldState={getFieldState}
          register={register}
          required={true}
          minLength={4}
          theme={BgInputEnum.WHITE_BG}
          color={ColorInputEnum.WHITE_COLOR}
        />
        <Input
          placeholder={t("login-form.placeholder-password")}
          label={"password"}
          type="text"
          name="password"
          getFieldState={getFieldState}
          register={register}
          required={true}
          minLength={4}
          theme={BgInputEnum.WHITE_BG}
          color={ColorInputEnum.WHITE_COLOR}
        />
        <div className="login-form__basement">
          <Button theme={ThemeButtonEnum.OUTLINE_INVERTED} type="submit">{t("login-form.send")}</Button>
        </div>
      </form>
    </div>
  )
}

export {LoginForm}