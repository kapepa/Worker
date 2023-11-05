import {createSelector} from "@reduxjs/toolkit";
import {GetNotice} from "../GetNotice/GetNotice";
import {NoticeState} from "../../model/types/notice.state";

const GetNoticeLoading = createSelector(
  GetNotice,
  (state: NoticeState) => state.loading,
);

export {GetNoticeLoading}