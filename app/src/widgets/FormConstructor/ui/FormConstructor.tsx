import {FC, FormEvent, memo, useMemo} from "react";
import {ClassNames} from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {FormState, UseFormRegister} from "react-hook-form/dist/types/form";
import {IFormCommentFormInput} from "../../../features/FormComment/model/interface/IFormCommentFormInput";
import {FormFieldsTypeComment} from "../types/FormFieldsTypeComment";
import {Input} from "../../../shared/ui/Input/Input";
import {BgEnum} from "../../../shared/const/BgEnum";

type formStateTypes = IFormCommentFormInput

interface FormConstructorProps{
  className?:string,
  classForm?:string,
  classInput?: string,
  disabled: boolean,
  submitText: string,
  fieldsName: FormFieldsTypeComment[],
  register: UseFormRegister<IFormCommentFormInput>,
  onSubmit: (data: FormEvent<HTMLFormElement>) => Promise<void>,
  formState: FormState<formStateTypes>
}

const FormConstructor: FC<FormConstructorProps> = memo((props) => {
  const {className, classForm, classInput, disabled, submitText, onSubmit, fieldsName, register, formState} = props;
  const { errors, touchedFields, dirtyFields, } = formState;


  const createFields = useMemo(() => {
    return fieldsName.map(({ name, type, label, placeholder, validation }: FormFieldsTypeComment, index: number) => {
      const { ref, ...other } = register(name, validation);
      const error = errors[name];
      const touch = touchedFields[name];
      const dirty = dirtyFields[name];

      return (
        <div key={`${name}-${index}`}>
          {!!label && <label className={ClassNames("form-constructor__label")} htmlFor={name} >{label}</label>}
          <Input
            theme={BgEnum.BG_COLOR}
            type={type}
            placeholder={placeholder}
            className={ClassNames("form-constructor__label", classInput )}
            refs={{ref}}
            {...other}
          />
          { (error?.message && ( !touch || dirty ) ) &&
            <div className="form-constructor__error">
              {error?.message}
            </div>
          }
        </div>
      )
    })
  },[fieldsName, register, classInput, dirtyFields, touchedFields, errors]);

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