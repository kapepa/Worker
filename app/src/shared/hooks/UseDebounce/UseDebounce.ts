import {ChangeEvent, MutableRefObject, useCallback, useRef} from "react";

const UseDebounce = (callback: (e: ChangeEvent<HTMLInputElement>) => void, milliseconds: number ) => {
  const refTimeout: MutableRefObject<ReturnType<typeof setTimeout> | undefined> = useRef(undefined);

  return useCallback( (e: ChangeEvent<HTMLInputElement>) => {
    if(!!refTimeout.current) clearTimeout(refTimeout.current);
    refTimeout.current = setTimeout(() => {callback(e)}, milliseconds)
  }, [callback, milliseconds])
};

export { UseDebounce };