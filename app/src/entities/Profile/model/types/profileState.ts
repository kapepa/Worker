import {ProfileTypes} from "./profileTypes";

export interface ProfileState {
  loading: boolean,
  data: ProfileTypes | undefined,
  error: string | undefined,
}