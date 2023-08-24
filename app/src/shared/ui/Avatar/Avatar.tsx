import {CSSProperties, FC, memo, useMemo} from "react";
import "./Avatar.scss";
import {ClassNames} from "../../lib/ClassNames";
import config from "../../../config";

interface AvatarProps {
  api?: boolean | undefined,
  className?: string,
  size?: number,
  src: string | undefined | File,
  alt: string,
  symbol: string | undefined,
}

const Avatar: FC<AvatarProps> = memo(({api = true, className, src, alt, size, symbol}) => {
  const style = useMemo<CSSProperties>(() => ({maxWidth: `${size}px`, maxHeight: `${size}px`, fontSize: `${ size ? size * .5 : 10 }px`}),[size]);
  const getFirstLetter = (str: string) => str.charAt(0).toUpperCase();

  const ToHaveAvatar = (src: string | undefined | File) => {

    if( typeof src === "string" && /http/ig.test(src)){
      return <img
        src={src}
        alt={alt}
        className={ClassNames("avatar__circle", className)}
      />
    }

    if(!!src) {
      const toString = typeof src === "string" ? src : URL.createObjectURL(src);
      return <img
        src={`${ api ? config.api + "/" : "" }${toString}`}
        alt={alt}
        className={ClassNames("avatar__circle", className)}
      />
    }

    if(!!symbol) return <div
      className={ClassNames("avatar__circle", "avatar__symbol", className)}
    >{getFirstLetter(symbol)}</div>;
  }

  return (
    <div className="avatar" style={style} data-testid="avatar">
      {ToHaveAvatar(src)}
    </div>
  )
});

export {Avatar};