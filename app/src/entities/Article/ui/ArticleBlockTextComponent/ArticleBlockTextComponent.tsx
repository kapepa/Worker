import {FC, memo} from "react";
import "./ArticleBlockTextComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface ArticleBlockTextComponentProps {
  className?: string,
}

const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo(({className}) => {
  return (
    <div className={ClassNames("article-text", className)} data-testid="article-text">
      ArticleBlockTextComponent
    </div>
  )
});

export {ArticleBlockTextComponent}