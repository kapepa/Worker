import {ArticleBlocks} from "./model/types/articleType";
import {ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import {DetailsActions, DetailsReducers} from "./model/slice/detailsSlice";
import {FetchArticleById} from "./service/FetchArticleById/FetchArticleById";
import {GetArticleDetailsData} from "./selectors/GetArticleDetailsData/GetArticleDetailsData";
import {ArticlesActions, ArticlesReducer} from "./model/slice/articlesSlice";
import {ArticlesState} from "./model/types/articlesState";
import {GetArticles} from "./selectors/GetArticles/GetArticles";
import {GetArticlesData} from "./selectors/GetArticlesData/GetArticlesData";
import {ArticlesList} from "./ui/ArticlesList/ArticlesList";
import {ArticlesItem} from "./ui/ArticlesItem/ArticlesItem";

export {
  ArticleDetails,
  DetailsActions,
  DetailsReducers,
  FetchArticleById,
  GetArticleDetailsData,
  ArticlesActions,
  ArticlesReducer,
  GetArticles,
  GetArticlesData,
  ArticlesList,
  ArticlesItem
};
export type {ArticleBlocks, ArticlesState};