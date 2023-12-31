import React, {FC, HTMLAttributes, memo} from "react";
import "./IcoImg.scss";
import { ClassNames } from "../../lib/ClassNames";

import { ReactComponent as HomeIco } from "../../assets/icons/main-20-20.svg";
import { ReactComponent as AboutIco } from "../../assets/icons/about-20-20.svg";
import { ReactComponent as ProfileIco } from "../../assets/icons/profile-20-20.svg";
import { ReactComponent as ArticleIco } from "../../assets/icons/article-20-20.svg";
import { ReactComponent as EyeIco } from "../../assets/icons/eye-20-20.svg";
import { ReactComponent as CalendarIco } from "../../assets/icons/calendar-20-20.svg";
import { ReactComponent as CopyIco } from "../../assets/icons/copy-20-20.svg";
import { ReactComponent as TiledIco } from "../../assets/icons/tiled-24-24.svg";
import { ReactComponent as ListIco } from "../../assets/icons/list-24-24.svg";
import { ReactComponent as EditIco } from "../../assets/icons/edit-20-20.svg";
import { ReactComponent as NotificationIco } from "../../assets/icons/notification-20-20.svg";
import { ReactComponent as StarIco } from "../../assets/icons/star.svg";
import { ReactComponent as UserIco } from "../../assets/icons/user-filled.svg";

enum IcoNameEnum {
  HomeIco,
  AboutIco,
  ProfileIco,
  ArticleIco,
  EyeIco,
  CalendarIco,
  CopyIco,
  TiledIco,
  ListIco,
  EditIco,
  NotificationIco,
  StarIco,
  UserIco
}

export enum IcoImgColor {
  PRIMARY_COLOR = "primary-color",
  SECONDARY_COLOR = "secondary-color",
  PRIMARY_COLOR_INVERTED = "primary-color-inverted",
  SECONDARY_COLOR_INVERTED = "secondary-color-inverted",
}

interface IcoImgProps extends HTMLAttributes<HTMLDivElement>{
  className?: string,
  ico: keyof typeof IcoNameEnum,
  fill?: string,
  color?: IcoImgColor,
  stroke?: boolean,
}

const IcoImg: FC<IcoImgProps> = memo(({ className, ico,  fill, color, stroke, ...otherProps }) => {
  const icoList: Record<keyof typeof IcoNameEnum, React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string | undefined}> > = {  
    "HomeIco": HomeIco,
    "AboutIco": AboutIco,
    "ProfileIco": ProfileIco,
    "ArticleIco": ArticleIco,
    "EyeIco": EyeIco,
    "CalendarIco": CalendarIco,
    "CopyIco": CopyIco,
    "TiledIco": TiledIco,
    "ListIco": ListIco,
    "EditIco": EditIco,
    "NotificationIco": NotificationIco,
    "StarIco": StarIco,
    "UserIco": UserIco,
  }

  return (
    <div className={ClassNames("ico-img", className)} data-testid="ico-img" {...otherProps}>
      {React.createElement(
        icoList[ico],
        {
          fill, width: "100%",
          height: "100%",
          className: stroke ?
            ClassNames({[`ico-img__stroke--${color}`]: color}) :
            ClassNames({[`ico-img__fill--${color}`]: color}),
        }
      )}
    </div>
  )
})

export default IcoImg