import {LoginTypes} from "./loginTypes";

export interface AuthState {
  loading: boolean,
  login: LoginTypes,
  token: string | undefined,
  error?: string | undefined
}