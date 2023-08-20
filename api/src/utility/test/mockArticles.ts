import {ArticlesInterface, ArticlesTypeKey} from "../../articles/interfaces/articles.interface";

export const MockArticles: ArticlesInterface = {
  id: "mockID",
  img: "mockImg.png",
  type: [ArticlesTypeKey.IT],
  title: "mockTitle",
  subtitle: "mockSubTitle",
  views: 100,
}