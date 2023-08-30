import {FC, InputHTMLAttributes, memo} from "react";
import "./Input.scss";
import {ClassNames} from "../../lib/ClassNames";
import {BgInputEnum} from "../../const/BgInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  className?:string
  theme: BgInputEnum,
  refs?: {ref: (instance: any) => void},
}

const Input: FC<InputProps> = memo( ({className, theme, refs, ...otherProps}) => {
  return (
    <input
      data-testid="input"
      className={ClassNames("input", `input--${theme}`, {"input--readonly": otherProps.readOnly}, className)}
      {...otherProps}
      {...refs}
    />
  )
})

export {Input};