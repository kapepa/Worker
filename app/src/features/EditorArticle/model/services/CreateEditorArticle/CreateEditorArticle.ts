import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {StateSchema} from "../../../../../app/providers/Store";
import Axios from "../../../../../utils/axios";
import {GetEditorArticleRecord} from "../../selectors/GetEditorArticleRecord/GetEditorArticleRecord";
import {ToForm} from "../../../../../utils/toForm";

const CreateEditorArticle = createAsyncThunk<ArticleType, undefined, { rejectValue: string, state: StateSchema}>(
  'editorArticle/CreateEditorArticle',
  async (props: undefined, thunkAPI) => {
    const record = GetEditorArticleRecord(thunkAPI.getState());
    const toForm = ToForm(record);

    try {
      const response = await Axios.post(
        "/api/articles/create/art",
        toForm,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error-create-article");
    }
  }
);

export {CreateEditorArticle};