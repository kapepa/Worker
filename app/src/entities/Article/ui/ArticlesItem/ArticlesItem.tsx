import {FC, memo, useMemo} from "react";
import "./ArticlesItem.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleType} from "../../model/types/articleType";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {Image} from "../../../../shared/ui/Image/Image";
import {ViewDate} from "../../../../shared/ui/ViewDate/ViewDate";
import {ColorView} from "../../../../shared/const/ColorView";
import {ViewEye} from "../../../../shared/ui/ViewEye/ViewEye";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import {RouterPath} from "../../../../shared/const/Routers";

interface ArticlesItemProps {
  className?: string,
  article: ArticleType,
  view: ArticlesView,
}

const ArticlesItem: FC<ArticlesItemProps> = memo(({className, article, view}) => {
  const { id, title, img, createdAt, type, views } = article;
  const viewClass = useMemo(() => ({"articles-item--block": view === "block", "articles-item--square": view === "square"}), [view]);
  const typeArticle = useMemo(() => (
    <div className="articles-item__type">
      {type.map((text: string, index: number) => (<span key={`${text}-${index}`} className="articles-item__piece">{text}</span>))}
    </div>
  ), [type])

  return (
    <AppLink to={`${RouterPath.ARTICLE}/${id}`} className={ClassNames("articles-item", viewClass, className)}>
      <div className="articles-item__roof">
        <ViewDate className="articles-item__date" date={createdAt} theme={ColorView.PrimaryDef} showIco={false} />
        <Image alt={title} src={img} />
      </div>
      <div className="articles-item__basement">
        <div className="articles-item__info">
          {typeArticle}
          <ViewEye className="articles-item__eye" quantity={views} theme={ColorView.PrimaryDef} reverse={true}/>
        </div>
        <Text classTitle="articles-item__title" theme={TextTheme.PRIMARY} title={title}/>
      </div>
    </AppLink>
  )
})

export {ArticlesItem}