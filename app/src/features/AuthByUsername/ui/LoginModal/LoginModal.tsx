import {FC, Suspense} from "react";
import "./LoginModal.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import Modal from "../../../../shared/ui/Modal/Modal";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import Loader from "../../../../shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string,
  isOpen: boolean,
  onClose: () => void,
}

const LoginModal: FC<LoginModalProps> = ({className, isOpen, onClose}) => {
  return (
    <Modal className={ClassNames(className, "login-modal")} isOpen={isOpen} onClose={onClose} data-testid="login-modal">
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync onClose={onClose}/>
      </Suspense>
    </Modal>
  )
}

export {LoginModal};