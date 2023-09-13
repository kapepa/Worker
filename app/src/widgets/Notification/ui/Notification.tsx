import {FC, memo, useCallback} from "react";
import "./Notification.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {NotificationEnum} from "../../../shared/const/NotificationEnum";
import XClose from "../../../shared/ui/XClose/XClose";
import {Text, TextTheme} from "../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NotificationProps {
  isOpen: boolean,
  className?: string,
  text: string,
  type: NotificationEnum,
  onClose: () => void,
  onConfirmed : () => void,
  isLoading?: boolean,
}

const Notification: FC<NotificationProps> = memo(({ isOpen, className, text, type, onClose, onConfirmed, isLoading }) => {
  const {t} = useTranslation("notification");
  const selectType = useCallback((type:NotificationEnum) => {
    switch (type) {
      case NotificationEnum.Attention: return t("attention");
      case NotificationEnum.Warning: return t("warning");
    }
  }, [t]);

  return (
    <div className={ClassNames("notification", {"notification--open": isOpen}, className)}>
      <div className="notification__overlay" onClick={onClose}/>
      <div className={ClassNames("notification__frame")}>
        <div className="notification__x-close">
          <XClose color="PRIMARY_COLOR" onClick={onClose}/>
        </div>
        <h5 className="notification__h">{selectType(type)}</h5>
        <Text theme={TextTheme.PRIMARY} text={text} classText="notification__text"/>
        <div className="notification__basement">
          <Button
            onClick={onConfirmed}
            className="notification__btn"
            theme={ThemeButtonEnum.OUTLINE_INVERTED}
            disabled={isLoading}
          >{t("ok")}</Button>
          <Button
            onClick={onClose}
            className="notification__btn"
            theme={ThemeButtonEnum.OUTLINE_RED}
          >{t("cancel")}</Button>
        </div>
      </div>
    </div>
  )
})

export { Notification };