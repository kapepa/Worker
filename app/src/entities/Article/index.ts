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
import {GetArticlesIds} from "./selectors/GetArticlesIds/GetArticlesIds";
import {GetArticlesView} from "./selectors/GetArticlesView/GetArticlesView";
import {GetArticlesHasMore} from "./selectors/GetArticlesHasMore/GetArticlesHasMore";
import {ArticlesRecommended} from "./ui/ArticlesRecommended/ArticlesRecommended";
import {RecommendedState} from "./model/types/recommendedState";
import {RecommendedActions, RecommendedReducer} from "./model/slice/recommendedSlice";

export {
  ArticleDetails,
  DetailsActions,
  ArticlesActions,
  ArticlesList,
  ArticlesItem,
  ArticlesRecommended,
  RecommendedActions,
  DetailsReducers,
  FetchArticleById,
  GetArticleDetailsData,
  ArticlesReducer,
  RecommendedReducer,
  GetArticles,
  GetArticlesData,
  GetArticlesIds,
  GetArticlesView,
  GetArticlesHasMore,
};

export type {ArticleBlocks, ArticlesState, RecommendedState};