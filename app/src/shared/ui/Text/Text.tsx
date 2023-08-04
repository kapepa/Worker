import {FC, memo} from "react";
import "./Text.scss";
import {ClassNames} from "../../lib/ClassNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme: TextTheme,
}

const Text: FC<TextProps> = memo(({className, title, text, theme}) => {
  return (
    <div className={ClassNames(className, "text")}>
      {title && <p className={ClassNames("text__title", `text__title--${theme}`)}>{title}</p>}
      {text && <p className={ClassNames("text__p", `text__p--${theme}`)}>{text}</p>}
    </div>
  )
})

export {Text};