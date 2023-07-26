import {FC, useRef, memo, useCallback, ChangeEvent} from "react";
import "./LoginForm.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {BgInputEnum, ColorInputEnum, Input} from "../../../../shared/ui/Input/Input";
import {LoginTypes} from "../../model/types/loginTypes";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../../model/slice/authSlice";
import {GetLogin} from "../../model/selectors/getLogin/getLogin";
import {LoginByUser} from "../../model/services/loginByUser/loginByUser";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {GetAuth} from "../../model/selectors/getAuth/getAuth";

interface LoginFormProps {
  className?: string,
}

const LoginForm: FC<LoginFormProps> = memo(({className}) => {
  const refForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(GetAuth);
  const { username, password } = useSelector(GetLogin);
  const { setUsername, setPassword } = AuthActions;
  const { t } = useTranslation();
  const { reset, register, handleSubmit, getFieldState, formState: { errors } } = useForm<LoginTypes>({
    defaultValues: {username, password},
  });

  const resetForm = () => {
    if(!!refForm.current) {
      reset();
      refForm.current.reset();
    }
  }

  const onSubmit: SubmitHandler<LoginTypes> = (data:LoginTypes) => {
    if(!errors) return;
    dispatch(LoginByUser(data))
      .then(() => {
        resetForm();
      });
  };

  const onChangeLogin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if(target.name === "username") dispatch(setUsername(target.value));
    if(target.name === "password") dispatch(setPassword(target.value));

  }, [dispatch, setUsername, setPassword])

  return (
    <div className={ClassNames(className, "login-form__wrapper")}>
      {!!error && <div>Error</div>}
      <h4 className="login-form__h">{t("login-form.login")}</h4>
      <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className="login-form" data-testid="form">
        {}
        <Input
          onChange={onChangeLogin}
          placeholder={t("login-form.placeholder-user")}
          label={"username"}
          type="text"
          name="username"
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
          onChange={onChangeLogin}
          placeholder={t("login-form.placeholder-password")}
          label={"password"}
          type="password"
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
            disabled={loading}
          >{t("login-form.send")}</Button>
        </div>
      </form>
    </div>
  )
})

export {LoginForm}