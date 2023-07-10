import { FC, useState, ReactNode, useMemo } from "react";
import { SideContext, SideInterface } from "./SideContext";

interface SideProviderProps {
  children: ReactNode,
}

const SideProvider: FC<SideProviderProps> = ({children}) => {
  const [side, setSide] = useState<boolean>(false);

  const onToggle = () => setSide(prev => !prev);
  const valueSide = useMemo<SideInterface>(() => ({open: side, toggleSide: onToggle}), [side])

  return (
    <SideContext.Provider value={valueSide}>
      {children}
    </SideContext.Provider>
  )
}

export default SideProvider;