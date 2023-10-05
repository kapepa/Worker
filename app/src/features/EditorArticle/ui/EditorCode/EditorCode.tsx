import {ChangeEvent, FC, memo, useCallback} from "react";
import "./EditorCode.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode} from "../../../../entities/Article/model/types/articleBlock";
import {useTranslation} from "react-i18next";
import XClose from "../../../../shared/ui/XClose/XClose";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {TextareaDynamic} from "../../../../widgets/TextareaDynamic";

interface EditorCodeProps extends Partial<ArticleBlockCode>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
  theme: BgEnum,
}

const EditorCode: FC<EditorCodeProps> = memo((props: EditorCodeProps) => {
  const {t} = useTranslation("editor");
  const {className, index, onRemove, theme} = props;

  const onChangeParagraphs = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target)
  }, [])

  return (
    <div className={ClassNames("editor-code", className)}>
      <div className="input-dynamic__board">
        <div className="editor-code__header">
          <label className="editor-code__label">{t(`block.code`)}</label>
          <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
        </div>
        <div className="editor-code__main">
          <TextareaDynamic
            theme={theme}
            placeholder={t("placeholder.block-textarea")}
            name={`blocks.${index}.paragraphs`}
            validation={{ required: { value: true, message: t("required.paragraphs") } }}
            onChange={onChangeParagraphs}
          />
        </div>
      </div>
    </div>
  )
});

export {EditorCode};