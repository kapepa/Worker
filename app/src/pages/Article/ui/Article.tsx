import {FC, memo, useCallback, useEffect} from "react";
import "./Article.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useDispatch, useSelector} from "react-redux";
import {GetUsers, MyselfUsers} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {ArticlesList, GetArticlesHasMore, GetArticlesView} from "../../../entities/Article";
import {FetchAllArticles} from "../../../entities/Article/service/FetchAllArticles/FetchAllArticles";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {SwitchView} from "../../../widgets/SwitchView";
import {InfiniteScroll} from "../../../widgets/InfiniteScroll";
import {ArticleOrderSort} from "../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../shared/const/ArticleOrderField";
import {ArticlesQuery} from "../../../shared/const/ArticlesQuery";
import {
  filterArticlesActions,
  FilterArticlesSearch,
  FilterArticlesSelectors,
  FilterArticlesState, FilterArticlesTabs
} from "../../../features/FilterArticles";

// import {useTranslation} from "react-i18next";
// import { useSearchParams } from 'react-router-dom';

type paramsTypes = {[key in keyof FilterArticlesState]?: string | ArticleOrderSort | ArticleOrderField | ArticlesQuery};
const Article: FC = memo(() => {
  // const { t } = useTranslation("article");
  // const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const articlesHasMore = useSelector(GetArticlesHasMore);
  const { profile } = useSelector(GetUsers);
  const articlesView = useSelector(GetArticlesView);
  const { setQueryAll } = filterArticlesActions;
  const navigate = useNavigate();

  const firstLoading = useCallback(() => {
    // searchParams
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const params: paramsTypes = Object.fromEntries(urlParams.entries());

    dispatch(setQueryAll(params));
    dispatch(FetchAllArticles());
  }, [dispatch, setQueryAll]);

  const onScrollNextArticles = useCallback(() => {
    if(articlesHasMore) dispatch(FetchAllArticles());
  }, [dispatch, articlesHasMore]);

  useEffect(() => {
    if(!profile) dispatch(MyselfUsers());
    if(!profile?.id) navigate(RouterPath.HOME);
  }, [profile, navigate, dispatch]);

  useEffect(() => {
    firstLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll scrollEnd={onScrollNextArticles} isEnd={articlesHasMore}>
      <div className="article" data-testid="article">
        <div className="article__roof">
          <FilterArticlesSelectors/>
          <SwitchView/>
        </div>
        <div className="article__middle">
          <FilterArticlesSearch/>
        </div>
        <div className="article__middle">
          <FilterArticlesTabs/>
        </div>
        <ArticlesList view={articlesView}/>
      </div>
    </InfiniteScroll>
  )
})

export { Article };