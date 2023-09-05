import {FC, memo, useCallback, useEffect, useMemo} from "react";
import "./ArticlesList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {GetArticles} from "../../selectors/GetArticles/GetArticles";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import Loader from "../../../../shared/ui/Loader/Loader";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {ArticlesItem} from "../ArticlesItem/ArticlesItem";

interface ArticlesListProps {
  className?: string,
  view: ArticlesView,
}

const ArticlesList: FC<ArticlesListProps> = memo(({ className, view }) => {
  const {t} = useTranslation("article");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data, ids, entities } = useSelector(GetArticles);
  const viewClass = useMemo(() => ({"articles-list--block": view === "block", "articles-list--square": view === "square"}), [view]);

  const firstLoading = useCallback(() => {
    dispatch(FetchAllArticles());
  }, [dispatch])

  useEffect(() => {
    if(!data) firstLoading();
  }, [data,firstLoading])

  if(loading) {
    return (
      <div className={ClassNames("articles-list", "articles-list--loading", className)}>
        <Loader/>
      </div>
    )
  }

  if(!!error) {
    return (
      <div className={ClassNames("articles-list", "articles-list--error", className)}>
        <Text theme={TextTheme.ERROR} title={t(error)}/>
      </div>
    )
  }

  if(!ids.length) {
    return (
      <div className={ClassNames("articles-list", "articles-empty", className)}>
        <Text theme={TextTheme.ERROR} title={t("articles-empty")}/>
      </div>
    )
  }

  return (
    <div
      className={ClassNames("articles-list", viewClass, className )}
    >
      {
        ids.map((id: string, index: number) => {
          const article = entities[id];
          return <ArticlesItem key={`${id}-${index}`} article={article} view={view}/>;
        })
      }
    </div>
  )
})

export {ArticlesList}