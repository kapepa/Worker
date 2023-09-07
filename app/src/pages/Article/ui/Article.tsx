import {FC, memo, useCallback, useEffect} from "react";
import "./Article.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useDispatch, useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {ArticlesList, GetArticlesIds} from "../../../entities/Article";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {ArticlesView} from "../../../shared/const/ArticlesView";
import {FetchAllArticles} from "../../../entities/Article/service/FetchAllArticles/FetchAllArticles";
import {AppDispatch} from "../../../app/providers/Store/config/store";
// import {useTranslation} from "react-i18next";

const Article: FC = memo(() => {
  // const { t } = useTranslation("article");
  const dispatch = useDispatch<AppDispatch>();
  const { profile, loading } = useSelector(GetUsers);
  const ids = useSelector(GetArticlesIds);
  const navigate = useNavigate();
  const firstLoading = useCallback(() => {
    dispatch(FetchAllArticles());
  }, [dispatch]);

  useEffect(() => {
    if(!profile?.id && !loading) navigate(RouterPath.HOME);
  }, [profile, loading, navigate]);

  useEffect(() => {
    if(!ids.length) firstLoading();
  }, [ids, firstLoading])

  return (
    <Scroll>
      <div className="article" data-testid="article">
        <ArticlesList view={ArticlesView.Block}/>
      </div>
    </Scroll>
  )
})

export { Article };