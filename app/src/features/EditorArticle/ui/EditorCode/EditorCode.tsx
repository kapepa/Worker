import {ChangeEvent, FC, memo, useCallback} from "react";
import "./EditorCode.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode} from "../../../../entities/Article/model/types/articleBlock";
import {useTranslation} from "react-i18next";
import XClose from "../../../../shared/ui/XClose/XClose";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {TextareaDynamic} from "../../../../widgets/TextareaDynamic";
import {SetBlocksValueInt} from "../../model/interface/SetBlocksValue.int";

interface EditorCodeProps extends Partial<ArticleBlockCode>{
  className?: string,
  index: number,
  onRemove: (index: number) => void,
  setBlocksValue: (props: SetBlocksValueInt) => void,
  theme: BgEnum,
}

const EditorCode: FC<EditorCodeProps> = memo((props: EditorCodeProps) => {
  const {t} = useTranslation("editor");
  const {className, index, setBlocksValue, onRemove, theme} = props;
  const name = `blocks.${index}.code`

  const onChangeCode = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.target.value;
    setBlocksValue({index, name: "code", value});
  }, [index, setBlocksValue]);

  return (
    <div className={ClassNames("editor-code", className)}>
      <div className="input-dynamic__board">
        <div className="editor-code__header">
          <label className="editor-code__label">{t(`block.code`)}</label>
          <XClose
            color={"PRIMARY_COLOR"}
            onClick={() => onRemove(index)}
            type="button"
            title={t("delete")}
            className="editor-code__x-close"
          />
        </div>
        <div className="editor-code__main">
          <TextareaDynamic
            theme={theme}
            placeholder={t("placeholder.block-textarea")}
            name={name}
            validation={{ required: { value: true, message: t("required.code") } }}
            onChange={onChangeCode}
          />
        </div>
      </div>
    </div>
  )
});

export {EditorCode};