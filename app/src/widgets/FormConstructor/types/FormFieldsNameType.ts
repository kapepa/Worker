import {HTMLInputTypeAttribute} from "react";
import {IFormCommentFormInput} from "../../../features/FormComment/model/interface/IFormCommentFormInput";

export type FormFieldsNameType = {
  label: string,
  name: keyof IFormCommentFormInput,
  type: HTMLInputTypeAttribute,
  placeholder: string,
  errorMessage: string
};