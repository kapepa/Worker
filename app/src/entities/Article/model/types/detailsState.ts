import {ArticleType} from "./articleType";

export interface DetailsState {
  loading: boolean,
  error: string | undefined,
  data: ArticleType | undefined,
}