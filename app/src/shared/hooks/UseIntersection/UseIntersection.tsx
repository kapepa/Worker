import {MutableRefObject, useEffect, useState} from "react";

interface UseIntersectionProps {
  element: MutableRefObject<HTMLElement | null>,
  rootMargin: string,
}

const UseIntersection = ({element, rootMargin}: UseIntersectionProps): boolean => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )
    current && observer?.observe(current);

    return () => {
      current && observer.unobserve(current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isVisible;
}

export {UseIntersection};