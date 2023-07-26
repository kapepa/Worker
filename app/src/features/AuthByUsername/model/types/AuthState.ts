import {LoginTypes} from "./loginTypes";

export interface AuthState {
  loading: boolean,
  login: LoginTypes,
  error?: string | undefined
}