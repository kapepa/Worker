import {ChangeEvent, FC, useMemo, useRef, useState} from "react";
import "./LoadAvatar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Avatar} from "../../../shared/ui/Avatar/Avatar";

interface LoadAvatarProps {
  className?: string,
  api?: boolean | undefined,
  size: number,
  src: string | File | undefined,
  alt: string,
  symbol: string | undefined,
  readOnly: boolean,
  onChangeAvatar(file: File | undefined): void,
}

const LoadAvatar: FC<LoadAvatarProps> = (props) => {
  const {size, symbol, src, alt, className, readOnly, onChangeAvatar} = props;
  const [avatar, setAvatar] = useState<string | undefined | File>();
  const refInput = useRef<HTMLInputElement>(null);
  const onload = () => { if(!readOnly) refInput.current?.click() };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target;
    const file: File | undefined = target?.files?.[0];
    setAvatar(file);
    onChangeAvatar(file);
  }

  const showAvatar = () => {
    if(!!avatar) return <Avatar api={false} className={className} symbol={symbol} size={size} src={avatar} alt={alt}/>
    return <Avatar api={true} className={className} symbol={symbol} size={size} src={src} alt={alt}/>
  }

  return (
    <>
      <div onClick={onload} className={ClassNames("load_avatar", className)}>
        {useMemo(showAvatar, [avatar, size, symbol, src, alt, className])}
        <input ref={refInput} className="load_avatar__input" onChange={onChange} readOnly={readOnly} name="file" type="file"/>
      </div>
    </>
  )
}

export {LoadAvatar};