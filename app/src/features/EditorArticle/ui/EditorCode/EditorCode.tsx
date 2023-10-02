import {FC, memo} from "react";
import "./EditorCode.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode, ArticleBlockType} from "../../../../entities/Article/model/types/articleBlock";
import {useTranslation} from "react-i18next";
import XClose from "../../../../shared/ui/XClose/XClose";

interface EditorCodeProps extends Partial<ArticleBlockCode>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
}

const EditorCode: FC<EditorCodeProps> = memo((props: EditorCodeProps) => {
  const {t} = useTranslation("editor");
  const {className, index, onRemove, id, type, code} = props;

  return (
    <div className={ClassNames("editor-code", className)}>
      <div className="editor-code__header">
        <label className="editor-code__label">{t(`block.code`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-code__main">

      </div>
    </div>
  )
});

export {EditorCode};