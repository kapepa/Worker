import {FC, memo, useMemo} from "react";
import "./ArticlesRecommended.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetRecommendedEntities} from "../../selectors/GetRecommendedEntities/GetRecommendedEntities";
import {GetRecommendedIds} from "../../selectors/GetRecommendedIds/GetRecommendedIds";
import {ArticlesItem} from "../ArticlesItem/ArticlesItem";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

interface ArticlesRecommendedProps {
  className?: string,
}

const ArticlesRecommended: FC<ArticlesRecommendedProps> = memo(({className}) => {
  const ids = useSelector(GetRecommendedIds);
  const entities = useSelector(GetRecommendedEntities);

  const listRecommended = useMemo(() => {
    return ids.map((id: string, index: number) => (
      <ArticlesItem
        className="articles-recommended__article"
        key={`${index}-${id}`}
        view={ArticlesView.Square}
        article={entities[id]}
      />
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ids.length])

  return (
    <div className={ClassNames("articles-recommended", className)}>
      {listRecommended}
    </div>
  )
})

export {ArticlesRecommended}