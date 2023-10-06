import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import {ArticleFormType} from "./ArticleFormType";

export interface EditorArticleState {
  loading: boolean,
  error: string | undefined,
  idArt: string | undefined,
  record: Partial<ArticleType> | Partial<ArticleFormType>,
  edit: ArticleType | ArticleFormType | undefined,
}