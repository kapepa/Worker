import {FormFieldsType} from "../../../shared/interface/FormFieldsType";
import {LoginTypes} from "../../../features/AuthByUsername";

export interface IProfileFormInput extends FormFieldsType {
  name: keyof LoginTypes;
}