import {FC, memo, useCallback, useMemo} from "react";
import "./ArticlesItem.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticleBlocks, ArticleType} from "../../model/types/articleType";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {Image} from "../../../../shared/ui/Image/Image";
import {ViewDate} from "../../../../shared/ui/ViewDate/ViewDate";
import {ColorView} from "../../../../shared/const/ColorView";
import {ViewEye} from "../../../../shared/ui/ViewEye/ViewEye";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import {RouterPath} from "../../../../shared/const/Routers";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {ArticleBlockType} from "../../model/types/articleBlock";
import {ArticleBlockTextComponent} from "../ArticleBlockTextComponent/ArticleBlockTextComponent";
import {useNavigate} from "react-router-dom";

interface ArticlesItemProps {
  className?: string,
  article: ArticleType,
  view: ArticlesView,
}

const ArticlesItem: FC<ArticlesItemProps> = memo(({className, article, view}) => {
  const navigate = useNavigate();
  const { t } = useTranslation("article");
  const { id, title, img, createdAt, type, views, users, blocks } = article;
  const viewClass = useMemo(() => ({"articles-item--block": view === "block", "articles-item--square": view === "square"}), [view]);

  const toArticle = useCallback(() => {
    navigate(`${RouterPath.ARTICLE}/${id}`);
  }, [id, navigate])

  const BlockText = useMemo(() => {
    const block: ArticleBlocks | undefined = blocks?.find((block: ArticleBlocks) => block.type === ArticleBlockType.TEXT);
    return (!!block && block.type === ArticleBlockType.TEXT) ? block : undefined;
  }, [blocks]);

  const typeArticle = useMemo(() => (
    <div className="articles-item__type">
      {type.map((text: string, index: number) => (<span key={`${text}-${index}`} className="articles-item__piece">{text}</span>))}
    </div>
  ), [type])

  const SquareStyle = useMemo(() => (
    <AppLink to={`${RouterPath.ARTICLE}/${id}`} className={ClassNames("articles-item", viewClass, className)} title={title}>
      <div className="item-square__roof">
        <ViewDate className="item-square__date" date={createdAt} theme={ColorView.PrimaryDef} showIco={false} />
        <Image className="item-square__image" alt={title} src={img} />
      </div>
      <div className="item-square__basement">
        <div className="item-square__info">
          {typeArticle}
          <ViewEye className="item-square__eye" quantity={views} theme={ColorView.PrimaryDef} reverse={true}/>
        </div>
        <Text classTitle="item-square__title" theme={TextTheme.PRIMARY} title={title}/>
      </div>
    </AppLink>
  ), [id, title, img, createdAt, views, typeArticle, className, viewClass])

  const BlockStyle = useMemo(() => (
    <div className={ClassNames("articles-item", viewClass, className)} >
      <div className="item-block__roof">
        <div className="item-block__info">
          <div className="item-block__user">
            <Avatar className="item-block__avatar" size={55} src={users?.avatar} alt={"avatar"} symbol={users?.username}/>
            <Text theme={TextTheme.PRIMARY} title={users?.username} />
          </div>
          <Text classTitle="item-block__title" theme={TextTheme.PRIMARY} title={title}/>
          {typeArticle}
        </div>
        <ViewDate className="item-block__date" date={createdAt} theme={ColorView.PrimaryDef} showIco={false} />
      </div>
      <Image className="item-block__image" alt={title} src={img} />
      <div className="item-block__text">
        {!!BlockText && <ArticleBlockTextComponent block={BlockText} />}
      </div>
      <div className="item-block__basement">
        <Button onClick={toArticle} theme={ThemeButtonEnum.OUTLINE_INVERTED}>{`${t("read-more")}...`}</Button>
        <ViewEye className="item-block__eye" quantity={views} theme={ColorView.PrimaryDef} reverse={true}/>
      </div>
    </div>
  ), [views, BlockText, createdAt, img, t, title, typeArticle, className, viewClass, toArticle, users?.avatar, users?.username]);

  return view === ArticlesView.Square ? SquareStyle : BlockStyle;
})

export {ArticlesItem}