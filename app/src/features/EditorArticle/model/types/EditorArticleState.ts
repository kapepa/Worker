import {ArticleType} from "../../../../entities/Article/model/types/articleType";

export interface EditorArticleState {
  loading: boolean,
  error: string | undefined,
  idArt: string | undefined,
  record: Partial<ArticleType>,
  edit: ArticleType | undefined,
}