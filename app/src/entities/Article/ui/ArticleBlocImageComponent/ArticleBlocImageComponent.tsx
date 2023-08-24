import {FC, memo} from "react";
import "./ArticleBlocImageComponent.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocImage} from "../../model/types/articleBlock";
import {Image} from "../../../../shared/ui/Image/Image";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface ArticleBlocImageComponentProps {
  className?: string,
  block: ArticleBlocImage,
}

const ArticleBlocImageComponent: FC<ArticleBlocImageComponentProps> =  memo(({className, block}) => {
  const { src, title } = block;

  return (
    <div className={ClassNames("article-image", className)} data-testid="article-image">
      <Image src={ src } alt={ title ?? "" }/>
      {!!title && <Text theme={TextTheme.PRIMARY} title={title}/>}
    </div>
  )
});

export { ArticleBlocImageComponent }