import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleType} from "../../model/types/articleType";
import Axios from "../../../../utils/axios";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {GetArticlesIds} from "../../selectors/GetArticlesIds/GetArticlesIds";
import {GetArticlesHasMore} from "../../selectors/GetArticlesHasMore/GetArticlesHasMore";
import {GetFilterArticles} from "../../../../features/FilterArticles";

const FetchAllArticles = createAsyncThunk<ArticleType[], undefined, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'articles/FetchAllArticles',
  async (props, thunkAPI) => {
    try {
      const articles = GetArticlesIds(thunkAPI.getState());
      const hasMore = GetArticlesHasMore(thunkAPI.getState());
      const { skip, take, order, sort, search } = GetFilterArticles(thunkAPI.getState());
      const skipVal = articles?.length ?? skip;

      if(!hasMore) return;

      const result = await Axios.get(`/api/articles/receive/all`, {
        params: {
          order,
          sort,
          search,
          take,
          skip: skipVal,
        }
      });

      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("all-articles-error");
    }
  }
)

export {FetchAllArticles}