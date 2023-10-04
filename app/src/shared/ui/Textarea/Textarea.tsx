import {FC, memo, ReactNode, TextareaHTMLAttributes} from "react";
import "./Textarea.scss";
import {ClassNames} from "../../lib/ClassNames";
import {BgEnum} from "../../const/BgEnum";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string,
  children?: ReactNode,
  theme: BgEnum,
  refs?: {ref: (instance: any) => void},
}

const Textarea: FC<TextareaProps> = memo((props: TextareaProps) => {
  const {className, children, theme, refs, ...otherProps} = props;

  return (
    <textarea
      className={ClassNames("textarea", `textarea--${theme}`, className)}
      {...otherProps}
      {...refs}
    >
      {children}
    </textarea>
  )
});

export {Textarea};