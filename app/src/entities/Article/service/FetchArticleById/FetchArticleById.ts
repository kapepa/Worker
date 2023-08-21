import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {ArticleType} from "../../model/types/articleType";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";

const FetchArticleById = createAsyncThunk<ArticleType, string, { rejectValue: string, extra: ThunkExtraArg }>(
  'details/fetchArticleById',
  async (id: string, thunkAPI) => {
    try {
      const response = await Axios.get(`/api/articles/receive/art/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("error-details")
    }
  }
)

export {FetchArticleById}