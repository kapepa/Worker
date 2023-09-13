import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";

const DeleteCommentById = createAsyncThunk<any, string, { rejectValue: string, extra: ThunkExtraArg }>(
  'comments/DeleteCommentById',
  async (commentId: string, thunkAPI) => {
    try {
      const response = await Axios.delete(`/api/comments/delete/${commentId}`);
      if(!(response.status === 204 || response.status === 200)) return thunkAPI.rejectWithValue("comments-delete");
      return commentId;
    } catch (e) {
      return thunkAPI.rejectWithValue("comments-delete");
    }
  }
)

export {DeleteCommentById};