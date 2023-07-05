import {ButtonHTMLAttributes, FC, ReactNode} from "react"
import "./Button.scss";
import {ClassNames} from "../../lib/ClassNames";

export enum ThemeButtonEnum {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  children?: ReactNode,
  theme?: ThemeButtonEnum,
}

const Button: FC<ButtonProps> = (
  {className, theme= ThemeButtonEnum.CLEAR, children, ...otherProps}
) => {

  return (
    <button
      className={ClassNames(className, "button", `button--${theme}`)}
      {...otherProps}
      data-testid="button"
    >
      {children}
    </button>
  )
}

export default Button;