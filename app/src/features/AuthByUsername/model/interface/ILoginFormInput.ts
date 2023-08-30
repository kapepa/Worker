import {FormFieldsType} from "../../../../shared/const/FormFieldsType";
import {LoginFormFields} from "../types/LoginFormFields";

export interface ILoginFormInput extends FormFieldsType {
  name: keyof LoginFormFields
}