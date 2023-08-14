import {FC, InputHTMLAttributes, memo} from "react";
import "./Input.scss";
import {ClassNames} from "../../lib/ClassNames";
import {FieldError, Path, UseFormRegister} from "react-hook-form";
import {UseFormGetFieldState} from "react-hook-form/dist/types/form";
import {useTranslation} from "react-i18next";
import {LoginTypes} from "../../../features/AuthByUsername";
import {ProfileTypes} from "../../../entities/Profile";
import {BgInputEnum} from "../../const/BgInput";
import {ColorInputEnum} from "../../const/ColorInputEnum";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  classNameAlert?: string,
  register?: UseFormRegister<LoginTypes | ProfileTypes>,
  label?: Path<LoginTypes | ProfileTypes>,
  getFieldState?: UseFormGetFieldState<LoginTypes | ProfileTypes>,
  required?: boolean,
  maxLength?: number,
  minLength?: number,
  theme: BgInputEnum,
  color: ColorInputEnum,
  errors?: FieldError | undefined,
}

const Input: FC<InputProps> = memo( (
  {className, classNameAlert, register, label, getFieldState, required, maxLength, minLength, theme, color, errors, ...otherProps}
) => {
  const {t} = useTranslation();

  return (
    <div className={ClassNames("input__wrapper", `input__wrapper--${color}`)}>
      { !!label && <label className="input__label" >{t(`login-form.label.${label}`)}</label> }
      <input
        data-testid="input"
        className={ClassNames("input", `input--${theme}`, {"input--readonly": otherProps.readOnly}, className)}
        {...(!!label && !!register) ? register(label, { required, maxLength, minLength }) : {}}
        {...otherProps}
      />
      {
        (getFieldState && label && getFieldState(label).error) &&
        <span className={ClassNames("input__alert", classNameAlert)}>
          {t(`form-error.${getFieldState(label).error?.type as string}`)}
        </span>
      }
    </div>
  )
})

export {Input};