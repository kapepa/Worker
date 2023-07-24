import {FC} from "react";
import "./LoginModal.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import Modal from "../../../../shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string,
  isOpen: boolean,
  onClose: () => void,
}

const LoginModal: FC<LoginModalProps> = ({className, isOpen, onClose}) => {
  return (
    <Modal className={ClassNames(className, "login-modal")} isOpen={isOpen} onClose={onClose} data-testid="login-modal">
      <LoginForm/>
    </Modal>
  )
}

export {LoginModal};