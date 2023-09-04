import {FC, InputHTMLAttributes, memo, useEffect, useMemo} from "react";
import "./InputDynamic.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useFormContext} from "react-hook-form";
import {Input} from "../../../shared/ui/Input/Input";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import { ErrorMessage } from '@hookform/error-message/dist';
import {BgEnum} from "../../../shared/const/BgEnum";
import {ColorEnum} from "../../../shared/const/ColorEnum";

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
  const { register, formState: { errors }, setValue, clearErrors } = useFormContext();
  const { ref, ...reg } = register(name, validation);
  const toHaveError = errors[name];

  useEffect(() => {
    setValue(name,defaultValue);
  }, [defaultValue, name, setValue])

  useEffect(() => {
    clearErrors(name)
  },[defaultValue, name, clearErrors])

  const translateError = useMemo(() => {
    if(name in errors){
      for(let key in validation) if(errors[name]?.type === key) {
          return {[name]: {...errors[name], message: validation[key].message}}
        }
    }
    return errors
  }, [validation, errors, name])

  return (
    <div className={ClassNames("input-dynamic", className)}>
      {!!label &&
        <label
          className={ClassNames("input-dynamic__label", {[`input-dynamic__label--${colorLabel}`]: colorLabel}, classLabel)}
          htmlFor={name}
        >{label}</label>
      }
      <div className="input-dynamic__board">
        <Input className={ClassNames("input-dynamic__input", classInput)}  theme={themeInput} refs={{ref}} { ...Object.assign(reg, otherProps) }/>
        { !!toHaveError &&
          <span className={ClassNames("input-dynamic__alert", classAlert)} data-testid="alert">
            <ErrorMessage errors={translateError} name={name} />
          </span>
        }
      </div>
    </div>
  )
});

export {InputDynamic}