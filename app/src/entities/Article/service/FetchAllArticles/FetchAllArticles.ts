import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleType} from "../../model/types/articleType";
import Axios from "../../../../utils/axios";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {GetArticlesIds} from "../../selectors/GetArticlesIds/GetArticlesIds";
import {GetArticlesHasMore} from "../../selectors/GetArticlesHasMore/GetArticlesHasMore";

interface FetchAllArticlesProps {
  take: number,
  skip: number,
}

const FetchAllArticles = createAsyncThunk<ArticleType[], FetchAllArticlesProps | undefined, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'articles/FetchAllArticles',
  async (query: FetchAllArticlesProps | undefined, thunkAPI) => {
    try {
      const articles = GetArticlesIds(thunkAPI.getState());
      const hasMore = GetArticlesHasMore(thunkAPI.getState());
      const skip = query?.skip ?? articles?.length ?? ArticlesQuery.Skip;
      const take = query?.take ?? ArticlesQuery.Take;

      if(!hasMore) return;

      const result = await Axios.get(`/api/articles/receive/all`, {
        params: { skip, take }
      });

      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("all-articles-error");
    }
  }
)

export {FetchAllArticles}