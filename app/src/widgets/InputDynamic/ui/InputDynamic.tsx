import {FC, InputHTMLAttributes, memo} from "react";
import "./InputDynamic.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useFormContext} from "react-hook-form";
import {Input} from "../../../shared/ui/Input/Input";
import {BgInputEnum} from "../../../shared/const/BgInput";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import { ErrorMessage } from '@hookform/error-message/dist';

interface InputDynamicProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string,
  className?: string,
  classLabel?: string,
  classInput?: string,
  classAlert?: string,
  name: string,
  theme: BgInputEnum,
  validation: RegisterOptions
}

const InputDynamic: FC<InputDynamicProps> = memo((props) => {
  const {className, classLabel, classInput, classAlert, theme, label, validation, name, ...otherProps} = props;
  const { register, formState: { errors } } = useFormContext();
  const { ref, ...reg } = register(name, validation);
  const toHaveError = errors[name];

  return (
    <div className={ClassNames("input-dynamic", className)}>
      {!!label && <label className={ClassNames("input-dynamic__label", classLabel)} htmlFor={name}>{label}</label>}
      <div className="input-dynamic__board">
        <Input className={ClassNames("input-dynamic__input", classInput)}  theme={theme} refs={{ref}} { ...Object.assign(reg, otherProps) }/>
        { !!toHaveError &&
          <span className={ClassNames("input-dynamic__alert", classAlert)} data-testid="alert">
            <ErrorMessage errors={errors} name={name} />
          </span>
        }
      </div>
    </div>
  )
});

export {InputDynamic}