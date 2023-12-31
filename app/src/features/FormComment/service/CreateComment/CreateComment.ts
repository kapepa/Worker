import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {CommentsTypes} from "../../../../entities/Comments";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
// import {GetArticleDetailsData} from "../../../../entities/Article";
import {GetUsersProfile} from "../../../../entities/Users";

const CreateComment = createAsyncThunk<CommentsTypes, string, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'formComment/CreateComment',
  async (text, thunkAPI) => {
    let art = thunkAPI.getState().details.data;
    let user = GetUsersProfile(thunkAPI.getState());

    if (!art?.id || !user) return thunkAPI.rejectWithValue("create-comment-error");

    try {
      const response = await Axios.post(`/api/comments/create/art/${art.id}`, {text});
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("create-comment-error");
    }
  }
)

export { CreateComment };