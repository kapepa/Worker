import {FC, memo, ReactNode, TextareaHTMLAttributes} from "react";
import "./Textarea.scss";
import {ClassNames} from "../../lib/ClassNames";
import {BgEnum} from "../../const/BgEnum";
import {ControllerRenderProps} from "react-hook-form";
import {ArticleBlocks} from "../../../entities/Article";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string,
  children?: ReactNode,
  theme: BgEnum,

}

const Textarea: FC<TextareaProps> = memo((props: TextareaProps) => {
  const {className, children, theme, ...otherProps} = props;

  return (
    <textarea
      className={ClassNames("textarea", `textarea--${theme}`, className)}
      {...otherProps}
    >
      {children}
    </textarea>
  )
});

export {Textarea};