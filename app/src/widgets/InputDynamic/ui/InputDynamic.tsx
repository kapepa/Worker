import {ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useEffect, useMemo} from "react";
import "./InputDynamic.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useController, useFormContext} from "react-hook-form";
import {Input} from "../../../shared/ui/Input/Input";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {BgEnum} from "../../../shared/const/BgEnum";
import {ColorEnum} from "../../../shared/const/ColorEnum";
import {ErrorMessage} from "@hookform/error-message";

interface InputDynamicProps extends InputHTMLAttributes<HTMLInputElement>{
  className?: string,
  classLabel?: string,
  classInput?: string,
  classAlert?: string,
  label?: string,
  name: string,
  themeInput: BgEnum,
  colorLabel?: ColorEnum,
  validation: RegisterOptions
}

const InputDynamic: FC<InputDynamicProps> = memo((props) => {
  const { className, classLabel, classInput, classAlert, themeInput, colorLabel, label, validation, name, defaultValue, ...otherProps } = props;
  const { control, clearErrors} = useFormContext();
  const { field: {ref, onChange, value, ...otherField}, fieldState: {error} } = useController({name, control, rules: validation})

  useEffect(() => {
    clearErrors(name)
  },[defaultValue, name, clearErrors])

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    clearErrors(name);
    if(!!otherProps.onChange) otherProps.onChange(e);
  }, [name, otherProps, onChange, clearErrors]);

  return (
    <div className={ClassNames("input-dynamic", className)}>
      {!!label &&
        <label
          className={ClassNames("input-dynamic__label", {[`input-dynamic__label--${colorLabel}`]: colorLabel}, classLabel)}
          htmlFor={name}
        >{label}</label>
      }
      <div className="input-dynamic__board">
        <Input
          {...Object.assign(otherField, otherProps)}
          className={ClassNames("input-dynamic__input", classInput)}
          theme={themeInput}
          refs={{ref}}
          onChange={onChangeInput}
          defaultValue={value}
        />
        { !!error?.message &&
          <span className={ClassNames("input-dynamic__alert", classAlert)} data-testid="alert">
            {error?.message}
          </span>
        }
      </div>
    </div>
  )
});

export {InputDynamic}