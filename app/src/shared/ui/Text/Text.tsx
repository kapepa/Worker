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
  classTitle?: string,
  classText?: string,
  title?: string,
  text?: string,
  theme: TextTheme,
  align?: TextAlign,
  size?: TextSize,
}

const Text: FC<TextProps> = memo((props: TextProps) => {
  const {className, classTitle, classText, title, text, theme, size, align = TextAlign.LEFT} = props;
  return (
    <div className={ClassNames( "text", className)}>
      {
        title &&
        <p
          className={ClassNames("text__title", `text__title--${theme}`, `text--${align}`, {[`text--${size}`]: size}, classTitle )}
        >{title}</p>
      }
      {
        text &&
        <p
          className={ClassNames("text__p", `text__p--${theme}`, `text--${align}`, {[`text--${size}`]: size}, classText )}
        >{text}</p>
      }
    </div>
  )
})

export {Text};