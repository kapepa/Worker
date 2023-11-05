import {createSelector} from "@reduxjs/toolkit";
import {GetNotice} from "../GetNotice/GetNotice";
import {NoticeState} from "../../model/types/notice.state";

const GetNoticeEntities = createSelector(
  GetNotice,
  (state: NoticeState) => state.entities,
);

export {GetNoticeEntities};