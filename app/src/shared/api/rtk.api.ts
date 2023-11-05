import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from "../../config";
import {LOCAL_STORAGE_TOKEN} from "../../app/contexts/Token";

export const RtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: config.api,
      prepareHeaders: (headers) => {
        const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN) || "";
        if (token) headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    }
  ),
  endpoints: (builder) => ({}),
});
