import {FC, memo, ReactNode, UIEvent, useCallback, useEffect, useRef} from "react";
import "./InfiniteScroll.scss";
import {UseInfiniteScroll} from "../../../shared/hooks/UseInfiniteScroll/UseInfiniteScroll";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {GetScrollHistoryPages, ScrollActions} from "../../../features/ScrollHistory";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {UseThrottle} from "../../../shared/hooks/UseThrottle/UseThrottle";

interface InfiniteScrollProps {
  className?: string,
  children: ReactNode,
  scrollEnd: () => void,
  isEnd?: boolean
}

const InfiniteScroll: FC<InfiniteScrollProps> = memo( (props: InfiniteScrollProps) => {
  const { children, scrollEnd, className, isEnd} = props;
  const { pathname } = useLocation();
  const scrollPage = useSelector(GetScrollHistoryPages(pathname));
  const dispatch = useDispatch();
  const { setScrollPage } = ScrollActions;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  UseInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: scrollEnd,
  })

  const setStoryScroll = useCallback(() => {
    const { position } = scrollPage;
    if(!!wrapperRef.current && !!position) wrapperRef.current?.scrollTo(0, position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  const onScroll = UseThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(setScrollPage({ page: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  useEffect(() => {
    setStoryScroll();
  }, [setStoryScroll]);

  return (
    <Scroll wrapperRef={wrapperRef} onScroll={onScroll}>
      <div className={ClassNames("infinite-scroll", className)} data-testid="infinite-scroll">
        {children}
        {isEnd && <div className="infinite-scroll__trigger" ref={triggerRef}/>}
      </div>
    </Scroll>
  )
})

export {InfiniteScroll};