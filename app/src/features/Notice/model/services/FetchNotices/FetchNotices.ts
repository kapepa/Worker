import {createAsyncThunk} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {NoticeTypes} from "../../types/notice.types";
import Axios from "../../../../../utils/axios";
import {AxiosResponse} from "axios";

const FetchNotices = createAsyncThunk<NoticeTypes[], undefined, { rejectValue: string, state: StateSchema }>(
  "notice/FetchNotices",
  async (_, thunkAPI) => {
    try {
      const result: AxiosResponse<NoticeTypes[], any> = await Axios.get("/api/notice/all");

      return result.data
    } catch (e) {
      return thunkAPI.rejectWithValue("error-get-notices");
    }
  }
);

export {FetchNotices};