import {FC, FormEvent, memo, useMemo} from "react";
import {ClassNames} from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {Input} from "../../../shared/ui/Input/Input";
import {BgInputEnum} from "../../../shared/const/BgInput";
import {ColorInputEnum} from "../../../shared/const/ColorInputEnum";
import {FormFieldsNameType} from "../types/FormFieldsNameType";
import {UseFormRegister} from "react-hook-form/dist/types/form";

interface FormConstructorProps{
  className?:string,
  classForm?:string,
  classInput?: string,
  disabled: boolean,
  submitText: string,
  onSubmit: (data: FormEvent<HTMLFormElement>) => ReturnType<any>,
  // onSubmit(data: FormEvent<HTMLFormElement>): ReturnType<any>,
  fieldsName: FormFieldsNameType[],
  register?: UseFormRegister<any>,
}

const FormConstructor: FC<FormConstructorProps> = memo((props) => {
  const {className, classForm, disabled, submitText, onSubmit, fieldsName, register} = props;

  const createFields = useMemo(() => {
    return fieldsName.map(({ name, type }: FormFieldsNameType, index: number) => {
      return <Input
        key={`${name}-${type}-${index}`}
        theme={BgInputEnum.WHITE_BG}
        color={ColorInputEnum.WHITE_COLOR}
        name={name}
        type={type}
        register={register}
      />
    })
  },[fieldsName, register]);

  return (<div className={ClassNames("form-constructor", className)}>
    <form onSubmit={onSubmit} className={ClassNames("form-constructor__form", classForm)}>
      <div className="form-constructor__fields">
        {createFields}
      </div>
      <div className="form-constructor__basement">
        <Button
          className="form-constructor__btn"
          type="submit"
          disabled={disabled}
        >{submitText}</Button>
      </div>
    </form>
  </div>)
});

export { FormConstructor };