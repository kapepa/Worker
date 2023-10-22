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
import {GetRecommended} from "./selectors/GetRecommended/GetRecommended";
import {GetRecommendedEntities} from "./selectors/GetRecommendedEntities/GetRecommendedEntities";
import {GetRecommendedIds} from "./selectors/GetRecommendedIds/GetRecommendedIds";
import {FetchRecommended} from "./service/FetchRecommended/FetchRecommended";
import {GetRecommendedLoading} from "./selectors/GetRecommendedLoading/GetRecommendedLoading";

export {
  ArticleDetails,
  DetailsActions,
  ArticlesActions,
  ArticlesList,
  ArticlesItem,
  ArticlesRecommended,
  RecommendedActions,
  FetchArticleById,
  FetchRecommended,
  DetailsReducers,
  ArticlesReducer,
  RecommendedReducer,
  GetArticles,
  GetArticlesData,
  GetArticlesIds,
  GetArticlesView,
  GetArticlesHasMore,
  GetRecommended,
  GetRecommendedEntities,
  GetRecommendedIds,
  GetArticleDetailsData,
  GetRecommendedLoading,
};

export type {ArticleBlocks, ArticlesState, RecommendedState};