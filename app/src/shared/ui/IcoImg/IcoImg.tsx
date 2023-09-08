import React, {FC, memo} from "react";
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
}

export enum IcoImgColor {
  PRIMARY_COLOR = "primary-color",
  SECONDARY_COLOR = "secondary-color",
  PRIMARY_COLOR_INVERTED = "primary-color-inverted",
  SECONDARY_COLOR_INVERTED = "secondary-color-inverted",
}

interface IcoImgProps {
  className?: string,
  ico: keyof typeof IcoNameEnum,
  fill?: string,
  color?: IcoImgColor,
  stroke?: boolean,
}

const IcoImg: FC<IcoImgProps> = memo(({ className, ico,  fill, color, stroke }) => {
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
  }

  return (
    <div className={ClassNames("ico-img", className)} data-testid="ico-img">
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