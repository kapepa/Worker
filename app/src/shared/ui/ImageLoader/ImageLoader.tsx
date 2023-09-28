import {FC, memo} from "react";
import "./ImageLoader.scss"
import {ClassNames} from "../../lib/ClassNames";
import Button, {ThemeButtonEnum} from "../Button/Button";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../Text/Text";

interface ImageLoaderProps {
  className?: string,
}

const ImageLoader: FC<ImageLoaderProps> = memo(({className}) => {
  const {t} = useTranslation("image_loader");
  return (
    <div className={ClassNames("image-loader", className)}>
      <div className="image-loader__cell">
        <Button type="button" theme={ThemeButtonEnum.OUTLINE}>{t("btn")}</Button>
      </div>
      <div className="image-loader__cell">
        <Text theme={TextTheme.INVERTED} text={t("notification")} />
      </div>
    </div>
  )
})

export {ImageLoader};