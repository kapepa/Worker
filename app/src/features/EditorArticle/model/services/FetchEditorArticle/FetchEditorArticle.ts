import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../../utils/axios";
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {GetEditorArticleId} from "../../selectors/GetEditorArticleId/GetEditorArticleId";
import {StateSchema} from "../../../../../app/providers/Store";

const FetchEditorArticle = createAsyncThunk<ArticleType, undefined, { rejectValue: string, state: StateSchema }>(
  'editorArticle/FetchEditorArticle',
  async (props, thunkAPI) => {
    try {
      const id: string | undefined = GetEditorArticleId(thunkAPI.getState());
      if(!id) return;

      const response = await Axios.get(`/api/articles/edit/${id}`);

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("error-editor-article");
    }
  }
)

export {FetchEditorArticle}