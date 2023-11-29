import {BasicRating} from "./ui/BasicRating/BasicRating";
import {ArticleRating} from "./ui/ArticleRating/ArticleRating";
import {useCreateRatingMutation, useGetArticlesQuery, useUpdateRatingMutation} from "./api/rating.api";
import {RatingType} from "./model/types/rating.type";

export {
  BasicRating,
  ArticleRating,
  useGetArticlesQuery,
  useUpdateRatingMutation,
  useCreateRatingMutation,
};
export type {RatingType};