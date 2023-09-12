import {FC, ReactNode, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

interface PortalModalProps {
  children: ReactNode,
}

const PortalModal: FC<PortalModalProps> = ({ children }) => {
  const refEl = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const findModals: Promise<HTMLElement | null> = Promise.resolve(document.getElementById("modals-container"));
    findModals.then((el: HTMLElement | null) => {
      refEl.current = el;
    })
  }, [])

  return <>{ refEl.current && createPortal(children, refEl.current)}</>;
}

export default PortalModal;