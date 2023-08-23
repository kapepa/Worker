import {FC, memo} from "react";
import "./Text.scss";
import {ClassNames} from "../../lib/ClassNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  CENTER = "center",
  LEFT = "left",
}

export enum TextSize {
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme: TextTheme,
  align?: TextAlign,
  size?: TextSize,
}

const Text: FC<TextProps> = memo(({className, title, text, theme, size, align = TextAlign.LEFT}) => {
  return (
    <div className={ClassNames( "text", className)}>
      {
        title &&
        <p
          className={ClassNames("text__title", `text__title--${theme}`, `text--${align}`, {[`text--${size}`]: size} )}
        >{title}</p>
      }
      {
        text &&
        <p
          className={ClassNames("text__p", `text__p--${theme}`, `text--${align}`, {[`text--${size}`]: size} )}
        >{text}</p>
      }
    </div>
  )
})

export {Text};