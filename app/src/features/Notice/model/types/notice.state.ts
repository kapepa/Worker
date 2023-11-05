import {NoticeTypes} from "./notice.types";

export interface NoticeState {
  loading: boolean,
  error: string | undefined,
  ids: string[],
  entities: {[key: string] : NoticeTypes},
}