import {FC} from "react";
import "./Image.scss";
import {ClassNames} from "../../lib/ClassNames";
import config from "../../../config";

interface ImageProps {
  className?: string,
  api?: boolean,
  alt: string,
  src: string,
}

const Image: FC<ImageProps> = ({className, alt, src, api}) => {

  if( /http/ig.test(src) ){
    return <img
      className={ClassNames("image", className)}
      src={src}
      alt={alt}
      data-testid={"image"}
    />
  }

  return (
    <img
      className={ClassNames("image", className)}
      src={ api ? src : `${config.api}/${src}`}
      alt={alt}
      data-testid={"image"}
    />
  )
}

export { Image };