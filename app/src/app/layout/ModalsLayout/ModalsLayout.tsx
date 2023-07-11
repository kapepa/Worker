import {FC, ReactNode} from "react";
// import Modal from "../../../shared/ui/Modal/Modal";

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