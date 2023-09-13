import {FC, ReactNode, useRef} from "react";
import "./InfiniteScroll.scss";
import {UseInfiniteScroll} from "../../../shared/hooks/UseInfiniteScroll/UseInfiniteScroll";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {ClassNames} from "../../../shared/lib/ClassNames";

interface InfiniteScrollProps {
  className?: string,
  children: ReactNode,
  scrollEnd: () => void
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({children, scrollEnd, className}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  UseInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: scrollEnd,
  })

  return (
    <Scroll wrapperRef={wrapperRef}>
      <div className={ClassNames("infinite-scroll", className)} data-testid="infinite-scroll">
        {children}
        <div className="infinite-scroll__trigger" ref={triggerRef}/>
      </div>
    </Scroll>
  )
}

export {InfiniteScroll};