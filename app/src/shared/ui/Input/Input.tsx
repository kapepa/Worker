import {FC, InputHTMLAttributes, memo} from "react";
import "./Input.scss";
import {ClassNames} from "../../lib/ClassNames";
import {IFormValuesLogin} from "../../../features/AuthByUsername";
import {Path, UseFormRegister} from "react-hook-form";
import {UseFormGetFieldState} from "react-hook-form/dist/types/form";
import {useTranslation} from "react-i18next";

export enum BgInputEnum {
  WHITE_BG = "white",
  WHITE_BG_INVERTED = "white-inverted",
}

export enum ColorInputEnum {
  WHITE_COLOR = "white-color",
  WHITE_COLOR_INVERTED = "white-color-inverted",
}


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  register: UseFormRegister<IFormValuesLogin>,
  label: Path<IFormValuesLogin>,
  getFieldState: UseFormGetFieldState<IFormValuesLogin>
  required: boolean,
  maxLength?: number,
  minLength?: number,
  theme: BgInputEnum,
  color: ColorInputEnum
}

const Input: FC<InputProps> = (
  {className, register, label, getFieldState, required, maxLength, minLength, theme, color, ...otherProps}
) => {
  const {t} = useTranslation();

  return (
    <div className={ClassNames("input__wrapper", `input__wrapper--${color}`)} data-testid="input">
      <label className="input__label">{t(`login-form.label.${label}`)}</label>
      <input
        className={ClassNames(className, "input", `input--${theme}`)}
        {...register(label, { required, maxLength, minLength })}
        {...otherProps}
      />
      {
        getFieldState(label).error &&
        <span className="input__alert">{t(`form-error.${getFieldState(label).error?.type as string}`)}</span>
      }
    </div>
  )
}

export {Input};