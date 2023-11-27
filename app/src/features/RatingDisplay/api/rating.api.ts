import {RtkApi} from "../../../shared/api/rtk.api";
import {RatingType} from "../model/types/rating.type";

const RatingApi = RtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<RatingType, string>({
      query: (id: string) => ({
        url: `/api/articles/rating/${id}`,
        method: "GET",
      }),
    }),
  }),
})

const {useGetArticlesQuery} = RatingApi;

export {useGetArticlesQuery};