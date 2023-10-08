import {ChangeEvent, FC, memo, useCallback} from "react";
import "./EditorText.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockText} from "../../../../entities/Article/model/types/articleBlock";
import XClose from "../../../../shared/ui/XClose/XClose";
import {useTranslation} from "react-i18next";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {TextareaDynamic} from "../../../../widgets/TextareaDynamic";
import {SetBlocksValueInt} from "../../model/interface/SetBlocksValue.int";

interface EditorTextProps extends Partial<ArticleBlockText>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
  setBlocksValue: (props: SetBlocksValueInt) => void,
  theme: BgEnum,
}

const EditorText: FC<EditorTextProps> = memo((props: EditorTextProps) => {
  const { t} = useTranslation("editor");
  const { className, index, onRemove, theme, setBlocksValue} = props;

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setBlocksValue({index, name: "title", value});
  }, [index, setBlocksValue])

  const onChangeParagraphs = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.target.value;
    setBlocksValue({index, name: "paragraphs", value});
  }, [index, setBlocksValue])

  return (
    <div className={ClassNames("editor-text", className)}>
      <div className="editor-text__header">
        <label className="editor-text__label">{t(`block.text`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-text__main">
        <InputDynamic
          name={`blocks.${index}.title`}
          type="title"
          label={t("label.block-text")}
          placeholder={t("placeholder.block-text")}
          classInput="editor-article__input"
          validation={{ required: { value: true, message: t("required.title") }, minLength: { value: 3, message: t("minLength.title") } }}
          onChange={onChangeTitle}
          themeInput={BgEnum.BG_COLOR}
        />
        <TextareaDynamic
          theme={theme}
          placeholder={t("placeholder.block-textarea")}
          name={`blocks.${index}.paragraphs`}
          validation={{ required: { value: true, message: t("required.paragraphs") } }}
          onChange={onChangeParagraphs}
        />
      </div>
    </div>
  )
});

export {EditorText};