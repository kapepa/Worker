import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../../../../features/FilterArticles";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import Axios from "../../../../utils/axios";
import {ArticleType} from "../../model/types/articleType";
import {ArticlesRecommendedQuery} from "../../../../shared/const/ArticlesRecommended";

const FetchRecommended = createAsyncThunk<ArticleType[], undefined, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'recommendedArticle/FetchRecommended',
  async (props , thunkAPI) => {
    try {
      const { order } = GetFilterArticles(thunkAPI.getState());

      const params = { order, take: ArticlesRecommendedQuery.Take };
      const result = await Axios.get(`/api/articles/receive/all`, {params});

      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("recommended-articles-error");
    }
  }
)

export {FetchRecommended}