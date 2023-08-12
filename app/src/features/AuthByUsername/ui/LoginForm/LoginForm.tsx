import {ChangeEvent, FC, memo, useCallback, useRef} from "react";
import "./LoginForm.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "../../../../shared/ui/Input/Input";
import {LoginTypes} from "../../model/types/loginTypes";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../../model/slice/authSlice";
import {GetLogin} from "../../model/selectors/getLogin/getLogin";
import {LoginByUser} from "../../model/services/loginByUser/loginByUser";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {GetAuth} from "../../model/selectors/getAuth/getAuth";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {BgInputEnum} from "../../../../shared/const/BgInput";
import {ColorInputEnum} from "../../../../shared/const/ColorInputEnum";

interface LoginFormProps {
  className?: string,
  onClose: () => void,
}

const LoginForm: FC<LoginFormProps> = memo(({className, onClose}) => {
  const refForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(GetAuth);
  const { email, password } = useSelector(GetLogin);
  const { setEmail, setPassword, cleanLogin } = AuthActions;
  const { t } = useTranslation();
  const { reset, register, handleSubmit, getFieldState, formState: { errors } } = useForm<LoginTypes>({
    defaultValues: {email, password},
  });

  const resetForm = () => {
    if(!!refForm.current) {
      reset();
      refForm.current.reset();
      dispatch(cleanLogin());
    }
  }

  const onSubmit: SubmitHandler<LoginTypes> = (data:LoginTypes) => {
    if(!errors) return;
    dispatch(LoginByUser(data))
      .then((attr) => {
        if(attr.meta.requestStatus === "fulfilled"){
          resetForm();
          onClose()
        };
      });
  };

  const onChangeLogin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    if(target.name === "username") dispatch(setEmail(target.value));
    if(target.name === "password") dispatch(setPassword(target.value));

  }, [dispatch, setEmail, setPassword]);

  return (
    <div className={ClassNames(className, "login-form__wrapper")}>
      {/*<Text className="login-form__h" title={t("login-form.login")} theme={TextTheme.PRIMARY}/>*/}
      <h4 className="login-form__h">{t("login-form.login")}</h4>
      <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className="login-form" data-testid="form">
        {!!error && <Text className="login-form__error" text={t(`login-form.error.${error}`)} theme={TextTheme.ERROR}/>}
        <Input
          onChange={onChangeLogin}
          placeholder={t("login-form.placeholder-email")}
          label={"email"}
          type="email"
          name="email"
          getFieldState={getFieldState}
          register={register}
          required={true}
          minLength={4}
          theme={BgInputEnum.WHITE_BG}
          color={ColorInputEnum.WHITE_COLOR}
          className="login-form__input"
          role="email"
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