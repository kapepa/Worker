import {FC, memo, useEffect} from "react";
import "./Article.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";
import {NavLink, useNavigate} from "react-router-dom";
// import {useTranslation} from "react-i18next";

const Article: FC = memo(() => {
  // const { t } = useTranslation("article");
  const { profile, loading } = useSelector(GetUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if(!profile?.id && !loading) navigate(RouterPath.HOME);
  }, [profile, loading, navigate]);

  return (
    <div className="article" data-testid="article">
      <NavLink to={`${RouterPath.ARTICLE}/aed4c183-3f50-44a8-acb9-750311590502`}>Der</NavLink>
    </div>
  )
})

export { Article };