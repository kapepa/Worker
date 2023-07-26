import {FC} from "react";
import "./Text.scss";
import {ClassNames} from "../../lib/ClassNames";

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
}

const Text: FC<TextProps> = ({className, title, text}) => {
  return (
    <div className={ClassNames(className, "text")}>
      {title && <p className="text__title">{title}</p>}
      {text && <p className="text__p">{text}</p>}
    </div>
  )
}

export {Text};