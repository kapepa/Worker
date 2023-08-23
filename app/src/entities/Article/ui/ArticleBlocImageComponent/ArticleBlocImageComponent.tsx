import {FC, memo} from "react";
import "./ArticleBlocImageComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocImage} from "../../model/types/articleBlock";

interface ArticleBlocImageComponentProps {
  className?: string,
  block: ArticleBlocImage,
}

const ArticleBlocImageComponent: FC<ArticleBlocImageComponentProps> =  memo(({className, block}) => {
  return (
    <div className={ClassNames("article-image", className)} data-testid="article-image">
      ArticleBlocImageComponent
    </div>
  )
});

export { ArticleBlocImageComponent }