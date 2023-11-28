import {BasicRating} from "./ui/BasicRating/BasicRating";
import {ArticleRating} from "./ui/ArticleRating/ArticleRating";
import {useGetArticlesQuery, useUpdateArticlesMutation} from "./api/rating.api";
import {RatingType} from "./model/types/rating.type";

export {BasicRating, ArticleRating, useGetArticlesQuery, useUpdateArticlesMutation};
export type {RatingType};