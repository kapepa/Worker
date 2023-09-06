import {FC, memo, useCallback, useEffect, useMemo} from "react";
import "./ArticlesList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {GetArticles} from "../../selectors/GetArticles/GetArticles";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {ArticlesItem} from "../ArticlesItem/ArticlesItem";
import {Card} from "../../../../shared/ui/Card/Card";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../../shared/const/SkeletonShape";
import {BgEnum} from "../../../../shared/const/BgEnum";

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
  }, [dispatch]);

  const blockSkeleton = useMemo(() => {
    const quantitySkeleton = new Array(6).fill("");

    return quantitySkeleton.map((_: string, index: number) => (
      <Card key={index} className="block-skeleton" theme={BgEnum.BG_COLOR_INVERTED}>
        <Skeleton shape={SkeletonShape.Circle} className="block-skeleton__avatar" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__name" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__title" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__date" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__img" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__title" />
      </Card>
    ))
  }, [])

  const squareSkeleton = useMemo(() => {
    const quantitySkeleton = new Array(3).fill("");

    return quantitySkeleton.map((_: string, index: number) => (
      <Card key={index} className="square-skeleton" theme={BgEnum.BG_COLOR_INVERTED}>
        <Skeleton shape={SkeletonShape.Square} className="square-skeleton__img" />
        <Skeleton shape={SkeletonShape.Square} className="square-skeleton__title" />
        <Skeleton shape={SkeletonShape.Square} className="square-skeleton__desc" />
      </Card>
    ))
  }, [])

  useEffect(() => {
    if(!data) firstLoading();
  }, [data,firstLoading])

  if(loading) {
    return (
      <div className={ClassNames("articles-list", "articles-list--loading", className)}>
        { view === ArticlesView.Block ? blockSkeleton : squareSkeleton}
      </div>
    )
  }

  if(!!error) {
    return (
      <div className={ClassNames("articles-list", "articles-list--error", className)}>
        <Text theme={TextTheme.ERROR} title={t(error)} className={"article-skeleton__img"}/>
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
    <div className={ClassNames("articles-list", viewClass, className )}>
      {
        ids.map((id: string, index: number) => {
          const article = entities[id];
          return  <ArticlesItem key={`${id}-${index}`} article={article} view={view}/>
        })
      }
    </div>
  )
})

export {ArticlesList}