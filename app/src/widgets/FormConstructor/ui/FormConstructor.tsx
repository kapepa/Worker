import {FC, FormEvent, memo, useMemo} from "react";
import {ClassNames} from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {FormFieldsNameType} from "../types/FormFieldsNameType";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {IFormCommentFormInput} from "../../../features/FormComment/model/interface/IFormCommentFormInput";
import {FieldError, FieldValues} from "react-hook-form";

interface FormConstructorProps{
  className?:string,
  classForm?:string,
  classInput?: string,
  disabled: boolean,
  submitText: string,
  onSubmit: (data: FormEvent<HTMLFormElement>) => ReturnType<any>,
  fieldsName: FormFieldsNameType[],
  register: UseFormRegister<IFormCommentFormInput>,
  // error: FieldError | undefined;
}

const FormConstructor: FC<FormConstructorProps> = memo((props) => {
  const {className, classForm, classInput, disabled, submitText, onSubmit, fieldsName, register} = props;

  const createFields = useMemo(() => {
    return fieldsName.map(({ name, type, label }: FormFieldsNameType, index: number) => {
      return (
        <div key={`${name}-${index}`}>
          {!!label && <label className={ClassNames("form-constructor__label")} htmlFor={name} >{label}</label>}
          <input
            type={type}
            {...register(name, {required: true})}
            className={ClassNames("form-constructor__label", classInput )}
          />
          {/*{error &&*/}
          {/*  <div className="form-constructor__error">*/}
          {/*    "asdasd"*/}
          {/*  </div>*/}
          {/*}*/}
        </div>
      )
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