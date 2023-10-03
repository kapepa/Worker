import {FC, memo, useEffect, useMemo} from "react";
import "./EditorCode.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode, ArticleBlockType} from "../../../../entities/Article/model/types/articleBlock";
import {useTranslation} from "react-i18next";
import XClose from "../../../../shared/ui/XClose/XClose";
import {Textarea} from "../../../../shared/ui/Textarea/Textarea";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {Control, useController, useForm, useFormContext} from "react-hook-form";
import {ArticleFormType} from "../../model/types/ArticleFormType";
import {ErrorMessage} from "@hookform/error-message";

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
  const { field, fieldState } = useController({
    control,
    rules: {required: { value: true, message: t("required.img") }},
    name: `blocks.${index}.code`
  });

  // const translateError = useMemo(() => {
  //   if(name in errors){
  //     for(let key in validation) if(errors[name]?.type === key) {
  //       return {[name]: {...errors[name], message: validation[key].message}}
  //     }
  //   }
  //   return errors
  // }, [errors, name]);

  console.log(fieldState)

  return (
    <div className={ClassNames("editor-code", className)}>
      <div className="editor-code__header">
        <label className="editor-code__label">{t(`block.code`)}</label>
        <XClose color={"PRIMARY_COLOR"} onClick={() => onRemove(index)} type="button" title={t("delete")}/>
      </div>
      <div className="editor-code__main">
        <Textarea theme={theme} placeholder={t("placeholder.code")}  />
      </div>
      {/*{ !!toHaveError &&*/}
      {/*  <span className={ClassNames("input-dynamic__alert", classAlert)} data-testid="alert">*/}
      {/*    <ErrorMessage errors={translateError} name={name} />*/}
      {/*  </span>*/}
      {/*}*/}
    </div>
  )
});

export {EditorCode};