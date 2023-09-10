import {FC, memo} from "react";
import "./Notification.scss";
import PortalModal from "../../../shared/ui/PortalModal/PortalModal";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {NotificationEnum} from "../../../shared/const/NotificationEnum";
import XClose from "../../../shared/ui/XClose/XClose";
import {Text, TextTheme} from "../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface NotificationProps {
  isOpen: boolean,
  className?: string,
  text: string,
  type: NotificationEnum,
  onClose: () => void,
  onConfirmed : () => void,
}

const Notification: FC<NotificationProps> = memo(({ isOpen, className, text, type, onClose, onConfirmed }) => {


  return (
    <PortalModal>
      <div className={ClassNames("notification", {"notification--open": isOpen}, className)}>
        <div className="notification__overlay" onClick={onClose}/>
        <div className={ClassNames("notification__frame")}>
          <XClose color="PRIMARY_COLOR" className="notification__x-close" onClick={onClose} />
          <h5 className="notification__h">asdasdasda</h5>
          <Text theme={TextTheme.PRIMARY} text={text} classText="notification__text"/>
          <div className="notification__basement">
            <Button onClick={onConfirmed} className="notification__btn" theme={ThemeButtonEnum.OUTLINE_INVERTED} >Ok</Button>
            <Button onClick={onClose} className="notification__btn" theme={ThemeButtonEnum.OUTLINE_RED}>Cancel</Button>
          </div>
        </div>
      </div>
    </PortalModal>
  )
})

export { Notification };