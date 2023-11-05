import {NoticeView} from "./ui/NoticeView/NoticeView";
import {NoticeTypes} from "./model/types/notice.types";
import {NoticeActions, NoticeReducer} from "./model/slice/noticeSlice";
import {NoticeState} from "./model/types/notice.state";
import {FetchNotices} from "./model/services/FetchNotices/FetchNotices";
import {GetNotice} from "./selectors/GetNotice/GetNotice";
import {GetNoticeIds} from "./selectors/GetNoticeIds/GetNoticeIds";
import {GetNoticeEntities} from "./selectors/GetNoticeEntities/GetNoticeEntities";
import {GetNoticeLoading} from "./selectors/GetNoticeLoading/GetNoticeLoading";

export {
  NoticeView,
  NoticeActions,
  NoticeReducer,
  FetchNotices,
  GetNotice,
  GetNoticeIds,
  GetNoticeEntities,
  GetNoticeLoading
};

export type {NoticeTypes, NoticeState};