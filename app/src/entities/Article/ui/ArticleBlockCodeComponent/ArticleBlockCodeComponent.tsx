import {FC, memo} from "react";
import "./ArticleBlockCodeComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockCode} from "../../model/types/articleBlock";
import {Code} from "../../../../shared/ui/Code/Code";

interface ArticleBlockCodeComponentProps {
  className?: string,
  block: ArticleBlockCode,
}

const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> =  memo(({className, block}) => {
  const { code } = block;
  return (
    <div className={ClassNames("article-code", className)} data-testid="article-code">
      <Code text={code}>{code}</Code>
    </div>
  )
});

export {ArticleBlockCodeComponent};