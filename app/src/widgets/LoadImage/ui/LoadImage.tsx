import {ChangeEvent, FC, ReactNode, useRef, useState} from "react";
import "./LoadImage.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";

interface LoadImageProps {
  className?: string,
  children: ReactNode,
}

const LoadImage: FC<LoadImageProps> = ({className, children}) => {
  const [images, setImages] = useState<string>();
  const refInput = useRef<HTMLInputElement>(null);
  const onload = () => refInput.current?.click();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files)
  }

  return (
    <>
      <div onClick={onload} className={ClassNames("load_image", className)}>
        {children}
        <input ref={refInput} className="load_image__input" onChange={onChange} name="file" type="file"/>
      </div>
    </>
  )
}

export {LoadImage};