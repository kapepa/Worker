import {ChangeEvent, FC, memo, useCallback} from "react";
import "./EditorImage.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocImage} from "../../../../entities/Article/model/types/articleBlock";
import XClose from "../../../../shared/ui/XClose/XClose";
import {useTranslation} from "react-i18next";
import {ImageDynamic} from "../../../../widgets/ImageDynamic";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {SetBlocksValueInt} from "../../model/interface/SetBlocksValue.int";

interface EditorImageProps extends Partial<ArticleBlocImage>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
  setBlocksValue: (props: SetBlocksValueInt) => void,
}

const EditorImage: FC<EditorImageProps> = memo((props: EditorImageProps) => {
  const {t} = useTranslation("editor");
  const {className, index, onRemove, setBlocksValue} = props;

  const loadImageArticle = useCallback((file: File) => {
    setBlocksValue({index, name: "src", value: file});
  }, [index, setBlocksValue])

  const onChangeArticle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setBlocksValue({index, name: "title", value});
  }, [index, setBlocksValue])

  return (
    <div className={ClassNames("editor-image", className)}>
      <div className="editor-image__header">
        <label className="editor-image__label">{t(`block.image`)}</label>
        <XClose
          color={"PRIMARY_COLOR"}
          onClick={() => onRemove(index)}
          type="button"
          title={t("delete")}
          className="editor-image__x-close"
        />
      </div>
      <div className="editor-image__main">
        <InputDynamic
          name={`blocks.${index}.title`}
          type="text"
          label={t("label.block-image")}
          placeholder={t("placeholder.block-image")}
          classInput="editor-article__input"
          validation={{ required: { value: true, message: t("required.title") }, minLength: { value: 3, message: t("minLength.title") } }}
          onChange={onChangeArticle}
          themeInput={BgEnum.BG_COLOR}
        />
        <ImageDynamic
          name={`blocks.${index}.src`}
          loadImage={loadImageArticle}
          validation={{ required: { value: true, message: t("required.img") } }}
        />
      </div>
    </div>
  )
});

export {EditorImage};