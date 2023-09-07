import {ArticleType} from "./articleType";

export interface ArticlesState {
  loading: boolean,
  error: string | undefined,
  data: ArticleType[] | undefined,
  ids: string[],
  entities: {[key: string]: ArticleType}
}