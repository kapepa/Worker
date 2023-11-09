import {createSelector} from "@reduxjs/toolkit";
import {GetNotice} from "../GetNotice/GetNotice";
import {NoticeState} from "../../model/types/notice.state";

const GetNoticeIds = createSelector(
  GetNotice,
  (state: NoticeState) => state.ids,
);

export {GetNoticeIds};