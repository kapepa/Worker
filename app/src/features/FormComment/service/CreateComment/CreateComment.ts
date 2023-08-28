import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {CommentsTypes} from "../../../../entities/Comments";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";

interface CreateCommentProps {
  artID: string,
  text: string,
}

const CreateComment = createAsyncThunk<CommentsTypes, CreateCommentProps, { rejectValue: string, extra: ThunkExtraArg }>(
  'formComment/CreateComment',
  async (props: CreateCommentProps, thunkAPI) => {
    const { artID, text } = props;
    try {
      const response = await Axios.post(`/api/comments/art${artID}`, text);
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("create-comment-error");
    }
  }
)

export { CreateComment };