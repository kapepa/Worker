import {createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "../../../../utils/axios";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {GetArticlesIds} from "../../selectors/GetArticlesIds/GetArticlesIds";
import {FetchAllArticlesRes} from "../../../../features/FilterArticles";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";

type replaceType = boolean | undefined;

const FetchAllArticles = createAsyncThunk<FetchAllArticlesRes, replaceType, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'articles/FetchAllArticles',
  async (replace = false , thunkAPI) => {
    try {
      const articles = GetArticlesIds(thunkAPI.getState());
      const hasMore = thunkAPI.getState().articles.hasMore;
      const tab = thunkAPI.getState().filterArticles.tab;
      const type = tab === ArticleTypesAdditionName.ALL ? undefined : { type: tab };
      const { skip, take, order, sort, search } = thunkAPI.getState().filterArticles;
      const skipVal = replace ? skip : articles?.length ?? skip;

      if(!hasMore) return {articles: [], replace, hasMore: true};

      const params = { order, sort, search, take, skip: skipVal, ...type };
      const result = await Axios.get(`/api/articles/receive/all`, {params});

      return {articles: result.data, replace, hasMore: result.data.length >= take};
    } catch (e) {
      return thunkAPI.rejectWithValue("all-articles-error");
    }
  }
)

export {FetchAllArticles}