import {RtkApi} from "./rtk.api";
import {NoticeTypes} from "../../features/Notice";

const NoticeApi = RtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<NoticeTypes[], any>({
      query: () => `/api/notice/all`,
    }),
  })
})

export const { useGetNotificationsQuery } = NoticeApi;

