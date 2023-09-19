import {FC, memo, useCallback, useEffect} from "react";
import "./Article.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useDispatch, useSelector} from "react-redux";
import {GetUsers, MyselfUsers} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {ArticlesList, GetArticlesHasMore, GetArticlesIds, GetArticlesView} from "../../../entities/Article";
import {FetchAllArticles} from "../../../entities/Article/service/FetchAllArticles/FetchAllArticles";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {SwitchView} from "../../../widgets/SwitchView";
import {InfiniteScroll} from "../../../widgets/InfiniteScroll";
import {FilterArticlesSearch, FilterArticlesSelectors} from "../../../features/FilterArticles";

// import {useTranslation} from "react-i18next";

const Article: FC = memo(() => {
  // const { t } = useTranslation("article");
  const dispatch = useDispatch<AppDispatch>();
  const articlesHasMore = useSelector(GetArticlesHasMore);
  const { profile } = useSelector(GetUsers);
  const ids = useSelector(GetArticlesIds);
  const articlesView = useSelector(GetArticlesView);
  const navigate = useNavigate();

  const firstLoading = useCallback(() => {
    dispatch(FetchAllArticles());
  }, [dispatch]);

  const onScrollNextArticles = useCallback(() => {
    if(articlesHasMore) dispatch(FetchAllArticles());
  }, [dispatch, articlesHasMore])

  useEffect(() => {
    if(!profile) dispatch(MyselfUsers());
    if(!profile?.id) navigate(RouterPath.HOME);
  }, [profile, navigate, dispatch]);

  useEffect(() => {
    if(!ids.length) firstLoading();
  }, [ids, firstLoading]);

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
        <ArticlesList view={articlesView}/>
      </div>
    </InfiniteScroll>
  )
})

export { Article };