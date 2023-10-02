import {FC, memo} from "react";
import "./EditorImage.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocImage} from "../../../../entities/Article/model/types/articleBlock";
import XClose from "../../../../shared/ui/XClose/XClose";
import {useTranslation} from "react-i18next";

interface EditorImageProps extends Partial<ArticleBlocImage>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
}

const EditorImage: FC<EditorImageProps> = memo((props: EditorImageProps) => {
  const {t} = useTranslation("editor");
  const {className, index, onRemove, id, type, src, title} = props;

  return (
    <div className={ClassNames("editor-image", className)}>
      <div className="editor-image__header">
        <label className="editor-image__label">{t(`block.image`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-image__main">

      </div>
    </div>
  )
});

export {EditorImage};