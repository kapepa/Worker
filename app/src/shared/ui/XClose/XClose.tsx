import React, {ButtonHTMLAttributes, FC, memo} from "react";
import "./XClose.scss";
import {ClassNames} from "../../lib/ClassNames";

enum ColorCloseEnum {
  BG_COLOR = "bg-color",
  BG_COLOR_INVERTED = "bg-color-inverted",
  PRIMARY_COLOR = "primary-color",
  SECONDARY_COLOR = "secondary-color",
  PRIMARY_COLOR_INVERTED = "primary-color-inverted",
  SECONDARY_COLOR_INVERTED = "secondary-color-inverted",
}

interface XCloseProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  cb?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  color: keyof typeof ColorCloseEnum
}

const XClose: FC<XCloseProps> = memo(({cb, className, color = "BG_COLOR", ...otherProps }) => {
  return (
    <button
      onClick={cb}
      className={ClassNames("x-close", className, `x-close--${ColorCloseEnum[color]}` )}
      data-testid="x-close"
      {...otherProps}
    />
  )
})

export default XClose;