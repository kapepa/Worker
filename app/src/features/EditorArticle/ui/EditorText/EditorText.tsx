import {ChangeEvent, FC, memo, useCallback} from "react";
import "./EditorText.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockText} from "../../../../entities/Article/model/types/articleBlock";
import XClose from "../../../../shared/ui/XClose/XClose";
import {useTranslation} from "react-i18next";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {Textarea} from "../../../../shared/ui/Textarea/Textarea";

interface EditorTextProps extends Partial<ArticleBlockText>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
  theme: BgEnum,
}

const EditorText: FC<EditorTextProps> = memo((props: EditorTextProps) => {
  const {t} = useTranslation("editor");
  const {className, index, id, onRemove,  title, type, paragraphs, theme} = props;

  const onChangeArticle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
  }, [])

  return (
    <div className={ClassNames("editor-text", className)}>
      <div className="editor-text__header">
        <label className="editor-text__label">{t(`block.text`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-text__main">
        <InputDynamic
          name="title"
          type="title"
          label={t("label.block-text")}
          placeholder={t("placeholder.block-text")}
          classInput="editor-article__input"
          validation={{ required: { value: true, message: t("required.title") }, minLength: { value: 3, message: t("minLength.title") } }}
          onChange={onChangeArticle}
          themeInput={BgEnum.BG_COLOR}
        />
        <Textarea theme={theme} placeholder={t("placeholder.block-textarea")} />
      </div>
    </div>
  )
});

export {EditorText};