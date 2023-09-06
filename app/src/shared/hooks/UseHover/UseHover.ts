import {useCallback, useMemo, useState} from "react";

interface UseHoverFn {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverType = [boolean, UseHoverFn];

const UseHover = (): UseHoverType  => {
  const [isHover, setHover] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, [isHover]);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, [isHover]);

  return useMemo(() => [isHover, {onMouseEnter, onMouseLeave}], []);
}

export {UseHover}