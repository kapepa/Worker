import {FC, memo} from "react";
import "./ImageDynamic.scss"
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ImageLoader} from "../../../shared/ui/ImageLoader/ImageLoader";

interface ImageDynamicProps {
  className?: string,
}

const ImageDynamic: FC<ImageDynamicProps> = memo(() => {
  return (
    <div className={ClassNames("image-dynamic")}>
      <ImageLoader/>
    </div>
  )
})

export {ImageDynamic}