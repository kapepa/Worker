import {ChangeEvent, FC, memo, useCallback, useRef} from "react";
import "./LoginForm.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {LoginTypes} from "../../model/types/loginTypes";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../../model/slice/authSlice";
import {GetLogin} from "../../model/selectors/getLogin/getLogin";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {GetAuth} from "../../model/selectors/getAuth/getAuth";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {LoginByUser} from "../../model/services/loginByUser/loginByUser";

interface LoginFormProps {
  className?: string,
  onClose: () => void,
}

const LoginForm: FC<LoginFormProps> = memo(({className, onClose}) => {
  const { t } = useTranslation("form");
  const refForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(GetAuth);
  const { email, password } = useSelector(GetLogin);
  const { setEmail, setPassword, cleanLogin } = AuthActions;

  const onChangeLogin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if(target.name === "email") dispatch(setEmail(target.value));
    if(target.name === "password") dispatch(setPassword(target.value));

  }, [dispatch, setEmail, setPassword]);

  const methods = useForm({
    defaultValues: {email, password},
  });

  const resetForm = () => {
    if(!!refForm.current) {
      methods.reset();
      refForm.current.reset();
      dispatch(cleanLogin());
    }
  }

  const onSubmit: SubmitHandler<LoginTypes> = (data:LoginTypes) => {
    if(!methods.formState.errors) return;
    dispatch(LoginByUser(data))
      .then((attr) => {
        if(attr.meta.requestStatus === "fulfilled"){
          resetForm();
          onClose()
        };
      });
  };

  return (
    <div className={ClassNames("login-form__wrapper", className)}>
      <h4 className="login-form__h">{t("login")}</h4>

      <FormProvider {...methods} >
        <form ref={refForm} onSubmit={methods.handleSubmit(onSubmit)} className="login-form" data-testid="form">
          {!!error && <Text className="login-form__error" text={t(`error.${error}`)} theme={TextTheme.ERROR}/>}
          <InputDynamic
            name="email"
            type="email"
            label={t("label.email")}
            placeholder={t("placeholder-email")}
            validation={{ required: { value: true, message: t("email-required") } }}
            onChange={onChangeLogin}
            themeInput={BgEnum.BG_COLOR}
            defaultValue={email}
          />
          <InputDynamic
            name="password"
            type="password"
            label={t("label.password")}
            placeholder={t("placeholder-password")}
            validation={{ required: { value: true, message: t("password-required") }, minLength: { value: 5, message: t("password-short") }}}
            onChange={onChangeLogin}
            themeInput={BgEnum.BG_COLOR}
            defaultValue={password}
          />
          <div className="login-form__basement">
            <Button
              className="login-form__btn"
              theme={ThemeButtonEnum.OUTLINE_INVERTED}
              type="submit"
              role="submit"
              disabled={loading}
            >{t("send")}</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
})

export {LoginForm}