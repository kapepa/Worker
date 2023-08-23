import {FC, memo} from "react";
import "./ArticleBlockTextComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlockText} from "../../model/types/articleBlock";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface ArticleBlockTextComponentProps {
  className?: string,
  block: ArticleBlockText,
}

const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo(({className, block}) => {
  const { title, paragraphs } = block;

  return (
    <div className={ClassNames("article-text", className)} data-testid="article-text">
      {!!title && <Text className="article-text__title" theme={TextTheme.PRIMARY} title={title} />}
      {paragraphs.map(
        (text: string, index: number) =>
          <Text className="article-text__paragraphs" key={`${text}-${index}`} theme={TextTheme.PRIMARY} text={text} />
      )}
    </div>
  )
});

export {ArticleBlockTextComponent}