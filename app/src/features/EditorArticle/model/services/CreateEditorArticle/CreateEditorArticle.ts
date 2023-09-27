import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {StateSchema} from "../../../../../app/providers/Store";
import Axios from "../../../../../utils/axios";

const CreateEditorArticle = createAsyncThunk<ArticleType, undefined, { rejectValue: string, state: StateSchema}>(
  'editorArticle/CreateEditorArticle',
  async (props: undefined, thunkAPI) => {
    try {
      const response = await Axios.post("/api/articles/create/art");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error-create-article");
    }
  }
)