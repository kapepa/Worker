import {FC, memo} from "react";
import "./Text.scss";
import {ClassNames} from "../../lib/ClassNames";

type HeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  CENTER = "center",
  LEFT = "left",
}

export enum TextSize {
  S = "size-s",
  M = "size-m",
  L = "size-l",
  XL = "size-xl",
}

const sizeHeaderTag: Record<TextSize, HeaderType> = {
  [TextSize.S]: "h5",
  [TextSize.M]: "h3",
  [TextSize.L]: "h2",
  [TextSize.XL]: "h1",
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
  headerTag?: HeaderType,
}

const Text: FC<TextProps> = memo((props: TextProps) => {
  const {className, classTitle, classText, title, headerTag, text, theme, size, align = TextAlign.LEFT} = props;
  const GetTag = (!!headerTag && size) ? sizeHeaderTag[size] : "p"

  return (
    <div className={ClassNames( "text", className)}>
      {
        title &&
        <GetTag
          className={ClassNames("text__title", `text__title--${theme}`, `text--${align}`, {[`text--${size}`]: size}, classTitle )}
        >{title}</GetTag>
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