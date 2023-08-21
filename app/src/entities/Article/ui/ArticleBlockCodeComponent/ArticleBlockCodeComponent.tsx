import {FC, memo} from "react";
import "./ArticleBlockCodeComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface ArticleBlockCodeComponentProps {
  className?: string,
}

const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> =  memo(({className}) => {
  return (
    <div className={ClassNames("article-code", className)} data-testid="article-code">
      ArticleBlockCodeComponent
    </div>
  )
});

export {ArticleBlockCodeComponent};