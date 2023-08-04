import {ProfileTypes} from "./profileTypes";

export interface ProfileState {
  loading: false,
  data: ProfileTypes | undefined,
  error: string | undefined,
}