import {HTMLInputTypeAttribute} from "react";
import {RegisterOptions} from "react-hook-form/dist/types/validator";

export interface FormFieldsType {
  label: string,
  name: string, // need add own keyof names
  type: HTMLInputTypeAttribute,
  placeholder: string,
  validation: RegisterOptions,
};