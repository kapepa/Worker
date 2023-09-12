import {FC, memo, ReactNode, HTMLAttributes,} from "react";
import "./Scroll.scss";
import {ClassNames} from "../../lib/ClassNames";

interface ScrollProps extends HTMLAttributes<HTMLElement>{
  className?: string,
  children: ReactNode,
}

const Scroll: FC<ScrollProps> = memo(({className, children, ...otherProps}) => {
  return (
    <section className={ClassNames("scroll", className)} {...otherProps} data-testid="scroll" >
      {children}
    </section>
  )
})

export {Scroll};