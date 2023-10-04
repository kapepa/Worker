import {FC, memo, useMemo} from "react";
import "./EditorCode.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode} from "../../../../entities/Article/model/types/articleBlock";
import {useTranslation} from "react-i18next";
import XClose from "../../../../shared/ui/XClose/XClose";
import {Textarea} from "../../../../shared/ui/Textarea/Textarea";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {Control, useController} from "react-hook-form";
import {ArticleFormType} from "../../model/types/ArticleFormType";

interface EditorCodeProps extends Partial<ArticleBlockCode>{
  className?: string,
  classAlert?: string,
  index: number,
  onRemove: (index: number) => void,
  theme: BgEnum,
  control: Control<ArticleFormType>
}

const EditorCode: FC<EditorCodeProps> = memo((props: EditorCodeProps) => {
  const {t} = useTranslation("editor");
  const {
    className,
    classAlert,
    index,
    onRemove,
    theme,
    control,
  } = props;
  const { field: {ref, ...otherField}, fieldState } = useController({
    control,
    rules: {required: { value: true, message: t("required.code")}},
    name: `blocks.${index}.code`
  });

  const translateError = useMemo(() => {
    return fieldState.error;
  }, [fieldState.error]);

  return (
    <div className={ClassNames("editor-code", className)}>
      <div className="input-dynamic__board">
        <div className="editor-code__header">
          <label className="editor-code__label">{t(`block.code`)}</label>
          <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
        </div>
        <div className="editor-code__main">
          <Textarea theme={theme} placeholder={t("placeholder.code")} refs={{ref}} {...otherField} />
        </div>
        { !!translateError &&
          <span className={ClassNames("editor-code__alert", classAlert)} data-testid="alert">
            {fieldState.error?.message}
          </span>
        }
      </div>
    </div>
  )
});

export {EditorCode};