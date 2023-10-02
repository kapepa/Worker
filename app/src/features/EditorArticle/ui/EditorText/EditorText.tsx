import {FC, memo} from "react";
import "./EditorText.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockText} from "../../../../entities/Article/model/types/articleBlock";
import XClose from "../../../../shared/ui/XClose/XClose";
import {useTranslation} from "react-i18next";

interface EditorTextProps extends Partial<ArticleBlockText>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
}

const EditorText: FC<EditorTextProps> = memo((props: EditorTextProps) => {
  const {t} = useTranslation("editor");
  const {className, index, id, onRemove,  title, type, paragraphs} = props;
  return (
    <div className={ClassNames("editor-text", className)}>
      <div className="editor-text__header">
        <label className="editor-text__label">{t(`block.text`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-text__main">

      </div>
    </div>
  )
});

export {EditorText};