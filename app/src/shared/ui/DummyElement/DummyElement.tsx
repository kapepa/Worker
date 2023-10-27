import {FC, useEffect, useRef} from "react";
import {UseIntersection} from "../../hooks/UseIntersection/UseIntersection";

interface DummyElementProps {
  callback: () => void,
}

const DummyElement: FC<DummyElementProps> = ({callback}) => {
  const triggerRef = useRef(null);
  const isVisible = UseIntersection({element: triggerRef, rootMargin: "0px"});

  useEffect(() => {
    if(isVisible) callback()
  }, [isVisible, callback]);

  return (
    <div ref={triggerRef} />
  )
};

export {DummyElement}