import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {GetArticlesIds} from "../../selectors/GetArticlesIds/GetArticlesIds";
import {GetArticlesHasMore} from "../../selectors/GetArticlesHasMore/GetArticlesHasMore";
import {FetchAllArticlesRes, GetFilterArticles} from "../../../../features/FilterArticles";

type replaceType = boolean | undefined;

const FetchAllArticles = createAsyncThunk<FetchAllArticlesRes, replaceType, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'articles/FetchAllArticles',
  async (replace = false , thunkAPI) => {
    try {
      const articles = GetArticlesIds(thunkAPI.getState());
      const hasMore = GetArticlesHasMore(thunkAPI.getState());
      const { skip, take, order, sort, search } = GetFilterArticles(thunkAPI.getState());
      const skipVal = replace ? skip : articles?.length ?? skip;

      if(!hasMore) return {articles: [], replace};

      const params = { order, sort, search, take, skip: skipVal };
      const result = await Axios.get(`/api/articles/receive/all`, {params});

      return {articles: result.data, replace};
    } catch (e) {
      return thunkAPI.rejectWithValue("all-articles-error");
    }
  }
)

export {FetchAllArticles}