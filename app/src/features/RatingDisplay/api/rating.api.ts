import {RtkApi} from "../../../shared/api/rtk.api";
import {RatingType} from "../model/types/rating.type";
import {ToForm} from "../../../utils/toForm";
import {RatingTypeCard} from "../../../entities/Rating";

interface CreateRatingInt {
  body: RatingTypeCard,
  articlesID: string
}

const RatingApi = RtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<RatingType, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/api/articles/rating/${id}`,
        method: "GET",
      }),
    }),
    updateRating: builder.mutation<RatingType, RatingType>({
      query: (body: RatingType)=> ({
        url: `/api/rating/update/${body.id}`,
        method: "PUT",
        body: ToForm(body),
      })
    }),
    createRating: builder.mutation<RatingType, CreateRatingInt>({
      query: ({ body,  articlesID }: CreateRatingInt) => ({
        url: `/api/rating/create-art/${articlesID}`,
        method: "POST",
        body: ToForm(body),
      })
    })
  }),
})

export const {
  useGetArticlesQuery,
  useUpdateRatingMutation,
  useCreateRatingMutation,
} = RatingApi;