import {FC, ReactNode} from "react";
import "./Scroll.scss";
import {ClassNames} from "../../lib/ClassNames";

interface ScrollProps {
  className?: string,
  children: ReactNode,
}

const Scroll: FC<ScrollProps> = ({className, children}) => {
  return (
    <div className={ClassNames("scroll", className)} data-testid="scroll" >
      {children}
    </div>
  )
}

export {Scroll};