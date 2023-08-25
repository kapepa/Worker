import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {CommentsTypes} from "../../model/types/commentsTypes";

interface FetchCommentsArtByIdProps {
  artId: string,
  query: {
    take: number,
    skip: number,
  }
}

export enum FetchCommentsQuery {
  Take = 8,
  Skip = 0
}

const FetchCommentsArtById = createAsyncThunk<CommentsTypes[], FetchCommentsArtByIdProps, { rejectValue: string, extra: ThunkExtraArg }>(
  'comments/FetchCommentsArtById',
  async (props: FetchCommentsArtByIdProps, thunkAPI) => {
    const {artId, query} = props;
    try {
      const response = await Axios.get(`/api/comments/receive/${artId}`, {
        params: query,
      })
      return response.data
    } catch (e) {
      thunkAPI.rejectWithValue("error-comments")
    }
  }
)

export {FetchCommentsArtById};