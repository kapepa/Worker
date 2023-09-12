import {FC, memo, useMemo} from "react";
import "./ArticlesList.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetArticles} from "../../selectors/GetArticles/GetArticles";
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
  const { loading, error, ids, entities } = useSelector(GetArticles);
  const viewClass = useMemo(() => ({"articles-list--block": view === "block", "articles-list--square": view === "square"}), [view]);

  const blockSkeleton = useMemo(() => {
    const quantitySkeleton = new Array(6).fill("");

    return quantitySkeleton.map((_: string, index: number) => (
      <Card key={index} className="block-skeleton" theme={BgEnum.BG_COLOR_INVERTED}>
        <div className="block-skeleton__header">
          <div className="block-skeleton__detail">
            <div className="block-skeleton__user">
              <Skeleton shape={SkeletonShape.Circle} className="block-skeleton__avatar" />
              <Skeleton shape={SkeletonShape.Square} className="block-skeleton__name" />
            </div>
            <Skeleton shape={SkeletonShape.Square} className="block-skeleton__title" />
          </div>
          <div className="block-skeleton__detail">
            <Skeleton shape={SkeletonShape.Square} className="block-skeleton__date" />
          </div>
        </div>
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__img" />
        <Skeleton shape={SkeletonShape.Square} className="block-skeleton__subtitle" />
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
  }, []);

  const isLoadingArticles = useMemo(() => {
    return (
      <div className="articles-list articles-list--loading" data-testid="loading">
        { view === ArticlesView.Block ? blockSkeleton : squareSkeleton}
      </div>
    )
  }, [view, blockSkeleton, squareSkeleton]);

  if(!!error) {
    return (
      <div className={ClassNames("articles-list", "articles-list--error", className)} data-testid="error">
        <Text theme={TextTheme.ERROR} title={t(error)}/>
      </div>
    )
  }

  if(!ids.length && !loading) {
    return (
      <div className={ClassNames("articles-list", "articles-list--empty", className)} data-testid="empty">
        <Text theme={TextTheme.ERROR} title={t("articles-empty")}/>
      </div>
    )
  }

  return (
    <div className={ClassNames("articles-list", viewClass, className )} data-testid="articles">
      {
        ids.map((id: string, index: number) => {
          const article = entities[id];
          return  <ArticlesItem key={`${id}-${index}`} article={article} view={view}/>
        })
      }
      { loading && isLoadingArticles }
    </div>
  )
})

export {ArticlesList}