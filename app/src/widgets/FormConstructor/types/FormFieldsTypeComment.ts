import {FormFieldsType} from "../../../shared/interface/FormFieldsType";
import {IFormCommentFormInput} from "../../../features/FormComment/model/interface/IFormCommentFormInput";

export interface FormFieldsTypeComment extends FormFieldsType{
  name: keyof IFormCommentFormInput,
}