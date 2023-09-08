import {ArticleType} from "./articleType";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

export interface ArticlesState {
  loading: boolean,
  error: string | undefined,
  data: ArticleType[] | undefined,
  ids: string[],
  entities: {[key: string]: ArticleType}
  view: ArticlesView,
}