import {FC, memo} from "react";
import "./ArticlesRecommended.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface ArticlesRecommendedProps {
  className?: string,
}

const ArticlesRecommended: FC<ArticlesRecommendedProps> = memo(({className}) => {
  return (
    <div className={ClassNames("articles-recommended", className)}>
      ArticlesRecommended
    </div>
  )
})

export {ArticlesRecommended}