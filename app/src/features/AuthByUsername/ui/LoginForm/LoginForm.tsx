import {FC, useRef} from "react";
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
  const refForm = useRef<HTMLFormElement>(null);
  const {t} = useTranslation();
  const { reset, register, handleSubmit, getFieldState, formState: { errors } } = useForm<IFormValuesLogin>({
    defaultValues: {name: "", password: ""},
  });

  const onSubmit: SubmitHandler<IFormValuesLogin> = data => {
    if(!errors) return;
    console.log(data)

    if(!!refForm.current) {
      reset();
      refForm.current.reset();
    }
  };

  return (
    <div className={ClassNames(className, "login-form__wrapper")}>
      <h4 className="login-form__h">{t("login-form.login")}</h4>
      <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className="login-form" data-testid="form">
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
          className="login-form__input"
          role="name"
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
          className="login-form__input"
          role="password"
        />
        <div className="login-form__basement">
          <Button
            className="login-form__btn"
            theme={ThemeButtonEnum.OUTLINE_INVERTED} type="submit"
            role="submit"
          >{t("login-form.send")}</Button>
        </div>
      </form>
    </div>
  )
}

export {LoginForm}