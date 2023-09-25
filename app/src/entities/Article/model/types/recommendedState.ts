import {ArticleType} from "./articleType";

export interface RecommendedState {
  loading: boolean,
  error: string | undefined,
  ids: string[],
  entities: {[key: string]: ArticleType}
}