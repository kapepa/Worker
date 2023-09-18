import {FC, memo, ReactNode, HTMLAttributes, MutableRefObject} from "react";
import "./Scroll.scss";
import {ClassNames} from "../../lib/ClassNames";

interface ScrollProps extends HTMLAttributes<HTMLElement>{
  className?: string,
  children: ReactNode,
  wrapperRef?: MutableRefObject<HTMLDivElement | null>
}

const Scroll: FC<ScrollProps> = memo((props: ScrollProps) => {
  const {className, children, wrapperRef, ...otherProps} = props
  return (
    <section ref={wrapperRef} className={ClassNames("scroll", className)} {...otherProps} data-testid="scroll" >
      {children}
    </section>
  )
})

export {Scroll};