import {ButtonHTMLAttributes, FC, memo, ReactNode, useMemo} from "react"
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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  className?: string,
  children?: ReactNode,
  theme?: ThemeButtonEnum,
  size?: SizeButton,
  disabled?: boolean,
  fragment?: boolean,
}

const Button: FC<ButtonProps> = memo((props) => {
  const {className, theme = ThemeButtonEnum.CLEAR, fragment = true, disabled = false, size = SizeButton.M, children, ...otherProps} = props;
  const ButtonView = useMemo(
    () => fragment ? "button" : "div",
    [fragment]
  )

  return (
    <ButtonView
      data-testid="button"
      className={ClassNames(className, "button", `button--${theme}`, `button--${size}`, {"button-disabled": disabled})}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </ButtonView>
  )
})

export default Button;