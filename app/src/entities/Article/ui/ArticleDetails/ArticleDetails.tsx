import {FC, memo} from "react";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleType} from "../../model/types/articleType";

interface ArticleDetailsProps {
  className?: string,
  date: ArticleType;
}

const ArticleDetails: FC<ArticleDetailsProps> = memo(({className, date}) => {
  return (
    <div className={ClassNames("article-details", className)} data-testid="article-details">
      ArticleDetails
    </div>
  )
});

export {ArticleDetails};