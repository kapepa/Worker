import {FC, ReactNode, RefObject, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

interface PortalModalProps {
  children: ReactNode,
}

const PortalModal: FC<PortalModalProps> = ({ children }) => {
  const refEl = useRef<HTMLElement | null>(null);

  const findModals: Promise<HTMLElement | null> = Promise.resolve(document.getElementById("modals-container"))

  useEffect(() => {
    findModals.then((el) => refEl.current = el)
  },[])

  return <>{ refEl.current && createPortal(children, refEl.current)}</>
}

export default PortalModal;