import {UsersTypes} from "../../../Users";
import {ArticleType} from "../../../Article/model/types/articleType";

export interface CommentsTypes {
  id: string,
  text: string,
  articles: ArticleType;
  users: UsersTypes;
  createdAt?: Date | string;
}