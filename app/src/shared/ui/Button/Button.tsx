import {ButtonHTMLAttributes, FC, ForwardedRef, memo, ReactNode} from "react";
import "./Button.scss";
import {ClassNames} from "../../lib/ClassNames";

export enum ThemeButtonEnum {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
  OUTLINE_INVERTED = "outline_inverted",
}

export enum SizeButton {
  M = "medium",
  L = "large",
  XL = "extra-large",
  C = "custom",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: ReactNode,
  theme?: ThemeButtonEnum,
  size?: SizeButton,
  disabled?: boolean,
  innerRef?: ForwardedRef<HTMLButtonElement>
}

const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme = ThemeButtonEnum.CLEAR,
    disabled = false,
    size = SizeButton.M,
    children,
    innerRef,
    ...otherProps
  } = props;

  return (
    <button
      data-testid="button"
      className={ClassNames(className, "button", `button--${theme}`, `button--${size}`, {"button-disabled": disabled})}
      disabled={disabled}
      ref={innerRef}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export default Button;