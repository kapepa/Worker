import {FormFieldsType} from "../../../shared/const/FormFieldsType";
import {IFormCommentFormInput} from "../../../features/FormComment/model/interface/IFormCommentFormInput";

export interface FormFieldsTypeComment extends FormFieldsType{
  name: keyof IFormCommentFormInput,
}