import {FC, ReactNode} from "react";

interface ModalsLayoutProps {
  children: ReactNode,
}

const ModalsLayout: FC<ModalsLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <div id="modals-container"/>
    </>
  )
}

export default ModalsLayout;