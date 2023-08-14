import {ProfileTypes} from "./profileTypes";

export interface ProfileState {
  loading: boolean,
  data: ProfileTypes | undefined,
  edit: ProfileTypes | undefined,
  error: string | undefined,
  readonly: boolean,
}