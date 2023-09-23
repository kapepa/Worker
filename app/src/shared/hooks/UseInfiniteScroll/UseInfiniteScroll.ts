import { MutableRefObject, useEffect } from "react";

interface UseInfiniteScrollProps {
  callback: () => void,
  triggerRef: MutableRefObject<HTMLDivElement | null>,
  wrapperRef: MutableRefObject<HTMLDivElement | null>,
}

const UseInfiniteScroll = ({ triggerRef, wrapperRef, callback }: UseInfiniteScrollProps) => {
  useEffect(() => {
    const trigger = triggerRef.current;
    const wrapper = wrapperRef.current;

    if(!!trigger && !!wrapper) {
      const options = {
        root: wrapper,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(( [entries] ) => {
        if(entries.isIntersecting) callback();
      }, options);

      observer.observe(trigger);

      return () => {
        if(observer) observer.unobserve(trigger);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRef, wrapperRef, callback]);
};

export { UseInfiniteScroll }