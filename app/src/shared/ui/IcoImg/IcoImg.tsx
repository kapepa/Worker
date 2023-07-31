import React, { FC } from "react";
import "./IcoImg.scss";
import { ClassNames } from "../../lib/ClassNames";

import { ReactComponent as HomeIco } from "../../assets/icons/main-20-20.svg";
import { ReactComponent as AboutIco } from "../../assets/icons/about-20-20.svg";

enum IcoNameEnum {
  HomeIco,
  AboutIco,
}

export enum IcoImgColor {
  PRIMARY_COLOR = "primary-color",
  SECONDARY_COLOR = "secondary-color",
  PRIMARY_COLOR_INVERTED = "primary-color-inverted",
  SECONDARY_COLOR_INVERTED = "secondary-color-inverted",
}

interface IcoImgProps {
  className?: string,
  alt?: string,
  ico?: keyof typeof IcoNameEnum,
  img?: boolean,
  fill?: string,
  color?: IcoImgColor,
}

const IcoImg: FC<IcoImgProps> = ({ className, ico, img, fill, color, alt="" }) => {

  const icoList: Record<keyof typeof IcoNameEnum, React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string | undefined}> > = {  
    "HomeIco": HomeIco,
    "AboutIco": AboutIco,
  }
  
  if(!!ico) {
    return (
      <div className={ClassNames(className, "ico-img")} data-testid="ico-img">
        {React.createElement(icoList[ico], {fill, width: "100%", height: "100%", className: ClassNames(`ico-img__fill--${color}`)})}
      </div>
    )
  }

  return (
    <div className={ClassNames(className, "ico-img")} data-testid="ico-img">
      <img 
        className={ClassNames(className, "ico-img")}
        alt={alt}
      />
    </div>
  )
}

export default IcoImg