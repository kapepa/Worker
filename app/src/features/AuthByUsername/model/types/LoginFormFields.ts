import {LoginTypes} from "./loginTypes";

export type LoginFormFields = Pick<LoginTypes, "email" | "password">