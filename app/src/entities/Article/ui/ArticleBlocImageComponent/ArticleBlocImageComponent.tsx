import {FC, memo} from "react";
import "./ArticleBlocImageComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface ArticleBlocImageComponentProps {
  className?: string,
}

const ArticleBlocImageComponent: FC<ArticleBlocImageComponentProps> =  memo(({className}) => {
  return (
    <div className={ClassNames("article-image", className)} data-testid="article-image">
      ArticleBlocImageComponent
    </div>
  )
});

export { ArticleBlocImageComponent }