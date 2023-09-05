import {FC, memo, useEffect} from "react";
import "./Article.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";
import {useNavigate} from "react-router-dom";
import {ArticlesList} from "../../../entities/Article";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {ArticlesView} from "../../../shared/const/ArticlesView";
// import {useTranslation} from "react-i18next";

const Article: FC = memo(() => {
  // const { t } = useTranslation("article");
  const { profile, loading } = useSelector(GetUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if(!profile?.id && !loading) navigate(RouterPath.HOME);
  }, [profile, loading, navigate]);

  return (
    <Scroll>
      <div className="article" data-testid="article">
        <ArticlesList view={ArticlesView.Square}/>
      </div>
    </Scroll>
  )
})

export { Article };