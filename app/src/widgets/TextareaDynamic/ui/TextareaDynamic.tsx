import {ChangeEvent, FC, memo, TextareaHTMLAttributes, useCallback, useEffect, useMemo} from "react";
import "./TextareaDynamic.scss"
import {ClassNames} from "../../../shared/lib/ClassNames";
import {BgEnum} from "../../../shared/const/BgEnum";
import {ColorEnum} from "../../../shared/const/ColorEnum";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {Textarea} from "../../../shared/ui/Textarea/Textarea";
import {useController, useFormContext} from "react-hook-form";

interface TextareaDynamicProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string,
  classLabel?: string,
  classText?: string,
  classAlert?: string,
  label?: string,
  name: string,
  theme: BgEnum,
  colorLabel?: ColorEnum,
  validation: RegisterOptions
}

const TextareaDynamic: FC<TextareaDynamicProps> = memo((props) => {
  console.log("TextareaDynamic")
  const { className, classText, classLabel, classAlert, validation, theme, name, label, colorLabel, defaultValue,  ...otherProps} = props;
  const { control, clearErrors } = useFormContext();
  const { field: {ref, onChange, ...otherField}, fieldState } = useController({name, control, rules: validation})

  useEffect(() => {
    clearErrors(name)
  },[defaultValue, name, clearErrors])

  const translateError = useMemo(() => {
    return fieldState.error;
  }, [fieldState.error]);

  const onChangeTextarea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if(!!otherProps.onChange) otherProps.onChange(e);
  }, [onChange, otherProps])

  return (
    <div className={ClassNames("textarea-dynamic", className)}>
      {!!label &&
        <label
          className={ClassNames("textarea-dynamic__label", {[`textarea-dynamic__label--${colorLabel}`]: colorLabel}, classLabel)}
          htmlFor={name}
        >{label}</label>
      }
      <div className="textarea-dynamic__board">
        <Textarea
          {...Object.assign(otherField, otherProps)}
          {...otherProps}
          className={classText}
          theme={theme}
          refs={{ref}}
          onChange={onChangeTextarea}
        />
        { !!translateError &&
          <span className={ClassNames("textarea-dynamic__alert", classAlert)} data-testid="alert">
            {translateError.message}
          </span>
        }
      </div>
    </div>
  )
});

export {TextareaDynamic};