import {UsersTypes} from "../../../../entities/Users";
import {ArticleType} from "../../../../entities/Article/model/types/articleType";

export type RatingType = {
  id?: string,
  rate?: number,
  text?: string,
  users?: UsersTypes,
  articles?: ArticleType,
  profile?: UsersTypes,
  createdAt?: Date;
}