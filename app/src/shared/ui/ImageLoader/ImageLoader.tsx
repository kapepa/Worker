import {FC, memo, useCallback, useRef, MouseEvent, ChangeEvent, useState, useMemo, useEffect} from "react";
import "./ImageLoader.scss"
import {ClassNames} from "../../lib/ClassNames";
import Button, {ThemeButtonEnum} from "../Button/Button";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../Text/Text";
import config from "../../../config";

interface ImageLoaderProps {
  name: string,
  className?: string,
  entryImage?: string,
  loadImage: (file: File) => void,
}

const ImageLoader: FC<ImageLoaderProps> = memo((props: ImageLoaderProps) => {
  const {className, name = "file", loadImage, entryImage, ...otherProps} = props;
  const {t} = useTranslation("image_loader");
  const ferInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const onClickBtn = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const current = ferInput.current;
    if(current) current.click();
  }, [ferInput]);

  const onChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.currentTarget;

    if(target.files) {
      const file: File = target.files[0];
      setImage(URL.createObjectURL(file));
      loadImage(file);
    }
  }, [loadImage]);

  const substituteUrl = useCallback((url: string) => {
    switch (!!url) {
      case /http[s?]:\/\//.test(url) : setImage(url); break;
      default: setImage(`${config.api}/${url}`); break;
    }
  }, [])

  const haveImage = useMemo(() => {
    return !!image ?
      <img className="image-loader__picture" src={image} alt="loader"/> :
      <Text theme={TextTheme.INVERTED} text={t("notification")} /> ;
  }, [t, image]);

  useEffect(() => {
    if(!!entryImage) substituteUrl(entryImage);
  }, [entryImage, substituteUrl])

  return (
    <div className={ClassNames("image-loader", className)}>
      <div className="image-loader__cell">
        <Button
          onClick={onClickBtn}
          type="button"
          theme={ThemeButtonEnum.OUTLINE}
        >{t("btn")}</Button>
        <input
          ref={ferInput}
          name={name}
          type="file"
          onChange={onChangeImage}
          className="image-loader__file"
          accept="image/png, image/gif, image/jpeg"
          {...otherProps}
        />
      </div>
      <div className="image-loader__cell">
        {haveImage}
      </div>
    </div>
  )
})

export {ImageLoader};