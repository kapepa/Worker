import {FormFieldsType} from "../../../../shared/interface/FormFieldsType";
import {LoginFormFields} from "../types/LoginFormFields";

export interface ILoginFormInput extends FormFieldsType {
  name: keyof LoginFormFields
}