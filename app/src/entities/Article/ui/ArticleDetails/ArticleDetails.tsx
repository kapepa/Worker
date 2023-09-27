import {FC, memo, useCallback} from "react";
import "./ArticleDetails.scss"
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocks, ArticleType} from "../../model/types/articleType";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import {Text, TextSize, TextTheme} from "../../../../shared/ui/Text/Text";
import {ViewEye} from "../../../../shared/ui/ViewEye/ViewEye";
import {ColorView} from "../../../../shared/const/ColorView";
import {ViewDate} from "../../../../shared/ui/ViewDate/ViewDate";
import {ArticleBlockType} from "../../model/types/articleBlock";
import {ArticleBlockTextComponent} from "../ArticleBlockTextComponent/ArticleBlockTextComponent";
import {ArticleBlocImageComponent} from "../ArticleBlocImageComponent/ArticleBlocImageComponent";
import {ArticleBlockCodeComponent} from "../ArticleBlockCodeComponent/ArticleBlockCodeComponent";
import {useTranslation} from "react-i18next";
import {CommentsList} from "../../../Comments";
import {CreateComment, FormComment} from "../../../../features/FormComment";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {ArticlesRecommended} from "../ArticlesRecommended/ArticlesRecommended";

interface ArticleDetailsProps {
  className?: string,
  date: ArticleType,
}

const ArticleDetails: FC<ArticleDetailsProps> = memo(({className, date}) => {
  const {t} = useTranslation("article");
  const dispatch = useDispatch<AppDispatch>();
  const {img, title, subtitle, views, createdAt, blocks} = date;

  const onSend = useCallback(
    (str: string) => {
      if(!!CreateComment) dispatch(CreateComment(str));
    },
    [dispatch]
  );

  const renderBlocks = useCallback((block: ArticleBlocks, index: number) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleBlockTextComponent key={`${block.id}-${index}`} className="article-details__block" block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleBlocImageComponent key={`${block.id}-${index}`} className="article-details__block" block={block}/>;
      case ArticleBlockType.CODE:
        return <ArticleBlockCodeComponent key={`${block.id}-${index}`} className="article-details__block" block={block}/>;
      default: return null;
    }
  }, [])

  return (
    <div className={ClassNames("article-details", className)} data-testid="article-details">
      <div className="article-details__frame-ava">
        <Avatar className="article-details__avatar" src={img} alt={title} symbol={title} size={200}/>
      </div>
      <Text
        theme={TextTheme.PRIMARY}
        title={title}
        size={TextSize.XL}
      />
      <Text
        theme={TextTheme.PRIMARY}
        title={subtitle}
        size={TextSize.L}
      />
      <ViewEye quantity={views} theme={ColorView.PrimaryDef}/>
      <ViewDate date={createdAt} theme={ColorView.PrimaryDef}/>
      { !!blocks && blocks.map(renderBlocks) }
      <Text
        theme={TextTheme.PRIMARY}
        title={t("recommended")}
      />
      <ArticlesRecommended/>
      <Text
        theme={TextTheme.PRIMARY}
        title={t("comments")}
      />
      <FormComment onSend={onSend}/>
      <CommentsList/>
    </div>
  )
});

export {ArticleDetails};