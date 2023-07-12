import {ButtonHTMLAttributes, FC, ReactNode} from "react"
import "./Button.scss";
import {ClassNames} from "../../lib/ClassNames";

export enum ThemeButtonEnum {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum SizeButton {
  M = "medium",
  L = "large",
  XL = "extra-large",
  C = "custom",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  children?: ReactNode,
  theme?: ThemeButtonEnum,
  size?: SizeButton,
}

const Button: FC<ButtonProps> = (
  {className, theme = ThemeButtonEnum.CLEAR, size = SizeButton.M, children, ...otherProps}
) => {

  return (
    <button
      className={ClassNames(className, "button", `button--${theme}`, `button--${size}`)}
      {...otherProps}
      data-testid="button"
    >
      {children}
    </button>
  )
}

export default Button;