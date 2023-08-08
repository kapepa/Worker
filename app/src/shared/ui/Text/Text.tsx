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

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme: TextTheme,
  align?: TextAlign,
}

const Text: FC<TextProps> = memo(({className, title, text, theme, align = TextAlign.LEFT}) => {
  return (
    <div className={ClassNames( "text", className)}>
      {
        title &&
        <p className={ClassNames("text__title", `text__title--${theme}`, `text__title--${align}`)}>{title}</p>
      }
      {
        text &&
        <p className={ClassNames("text__p", `text__p--${theme}`, `text__p--${align}`)}>{text}</p>
      }
    </div>
  )
})

export {Text};