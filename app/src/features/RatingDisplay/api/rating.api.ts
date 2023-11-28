import {RtkApi} from "../../../shared/api/rtk.api";
import {RatingType} from "../model/types/rating.type";
import {ToForm} from "../../../utils/toForm";

const RatingApi = RtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<RatingType, string>({
      query: (id: string) => ({
        url: `/api/articles/rating/${id}`,
        method: "GET",
      }),
    }),
    updateArticles: builder.mutation<RatingType, RatingType>({
      query: (body: RatingType)=> ({
        url: `/api/rating/update/${body.id}`,
        method: "PUT",
        body: ToForm(body),
      })
    }),
  }),
})

export const {
  useGetArticlesQuery,
  useUpdateArticlesMutation,
} = RatingApi;