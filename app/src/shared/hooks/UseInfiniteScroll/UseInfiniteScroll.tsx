import {MutableRefObject, useEffect, useRef} from "react";

interface UseInfiniteScrollProps {
  callback: () => void,
  triggerRef: MutableRefObject<HTMLElement>,
  wrapperRef: MutableRefObject<HTMLElement>,
}

const UseInfiniteScroll = ({ triggerRef, wrapperRef, callback }: UseInfiniteScrollProps) => {
  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(( [entries] ) => {
      console.log(entries)
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if(observer) observer.unobserve(triggerRef.current);
    }
  }, [triggerRef, wrapperRef])
}

export { UseInfiniteScroll }