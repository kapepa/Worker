import {Countries} from "../../../../shared/const/Countries";
import {ArticleBlocks, ArticleType} from "../../../Article/model/types/articleType";

export interface UsersTypes {
  id: string,
  username: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string,
  avatar?: string | File,
  country?: Countries,
  city?: string,
  articles?: ArticleType[]
  blocks?: ArticleBlocks[],
}