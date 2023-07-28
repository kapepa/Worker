import React, {FC, ReactNode, useCallback, useEffect} from "react";
import "./Modal.scss";
import {ClassNames} from "../../lib/ClassNames";
import XClose from "../XClose/XClose";
import PortalModal from "../PortalModal/PortalModal";

interface ModalProps {
  className?: string;
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const closeHandler = useCallback((e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = (e.target as HTMLDivElement );
    if( target.classList.contains("modal__overlay") || target.classList.contains("modal__x-close") ) onClose();
  }, [onClose]);

  const mods: Record<string, boolean> = {
    "modal--open": isOpen,
  }

  const onEscape = useCallback((e: KeyboardEvent) => {
      if( isOpen && e.key && e.key.toLowerCase() === "escape" ) onClose();
    }, [ isOpen, onClose ]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape)
  })

  return (
    <PortalModal>
      <div className={ClassNames(className, "modal", mods)} data-testid="modal">
        <div onClick={closeHandler} className="modal__overlay">
          <div className="modal__content" >
            { children }
            <XClose cb={closeHandler} color={"BG_COLOR"} className="modal__x-close"/>
          </div>
        </div>
      </div>
    </PortalModal>
  )
}

export default Modal;