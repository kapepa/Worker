import {FC, memo, useCallback} from "react";
import "./ArticleVirtualized.scss"
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {List} from 'react-virtualized';
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {ViewDate} from "../../../../shared/ui/ViewDate/ViewDate";
import {ColorView} from "../../../../shared/const/ColorView";
import {Image} from "../../../../shared/ui/Image/Image";
import {ArticleBlockTextComponent} from "../ArticleBlockTextComponent/ArticleBlockTextComponent";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {ViewEye} from "../../../../shared/ui/ViewEye/ViewEye";
import {useTranslation} from "react-i18next";
import {ArticleBlocks} from "../../model/types/articleType";
import {RouterPath} from "../../../../shared/const/Routers";
import {ArticleBlockType} from "../../model/types/articleBlock";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetArticles} from "../../selectors/GetArticles/GetArticles";
import {DummyElement} from "../../../../shared/ui/DummyElement/DummyElement";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {GetArticlesHasMore} from "../../selectors/GetArticlesHasMore/GetArticlesHasMore";
import {AppDispatch} from "../../../../app/providers/Store/config/store";

interface ArticleVirtualizedProps{
  className?: string,
  view: ArticlesView,
  scrollEnd: () => void,
  isEnd?: boolean
}

const ArticleVirtualized: FC<ArticleVirtualizedProps> = memo(({className, view, scrollEnd, isEnd}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { ids, entities } = useSelector(GetArticles);
  const { t } = useTranslation("article");
  const articlesHasMore = useSelector(GetArticlesHasMore);


  const toEndScroll = useCallback(() => {
    if(articlesHasMore) dispatch(FetchAllArticles());
  }, [articlesHasMore, dispatch])

  function rowRenderer({key, index, isScrolling, isVisible, style}: any) {
    const article = entities[ids[index]];
    if(!article) return;
    const { id, title, img, createdAt, type, views, users, blocks } = article;
    const isLast: boolean = index === (ids.length - 1);

    const BlockText = () => {
      const block: ArticleBlocks | undefined = blocks?.find((block: ArticleBlocks) => block.type === ArticleBlockType.TEXT);
      return (!!block && block.type === ArticleBlockType.TEXT) ? block : undefined;
    };

    const toArticle =() => {
      navigate(`${RouterPath.ARTICLE}/${id}`);
    }

    const typeArticle = () => (
      <div className="articles-item__type">
        {type.map((text: string, index: number) => (<span key={`${text}-${index}`} className="articles-item__piece">{text}</span>))}
      </div>
    );

    const getText = BlockText();
    const getTypeArticle = typeArticle()

    return (
      <div key={key} style={style} className="article-virtualized--item">
        <div className="article-virtualized--inside">
          <div className="item-block__roof">
            <div className="item-block__info">
              <div className="item-block__user">
                <Avatar className="item-block__avatar" size={55} src={users?.avatar} alt={"avatar"} symbol={users?.username}/>
                <Text theme={TextTheme.PRIMARY} title={users?.username} />
              </div>
              <Text classTitle="item-block__title" theme={TextTheme.PRIMARY} title={title}/>
              {getTypeArticle}
            </div>
            <ViewDate className="item-block__date" date={createdAt} theme={ColorView.PrimaryDef} showIco={false} />
          </div>
          <Image className="item-block__image" alt={title} src={img} />
          <div className="item-block__text">
            {!!getText && <ArticleBlockTextComponent block={getText} />}
          </div>
          <div className="item-block__basement">
            <Button onClick={toArticle} theme={ThemeButtonEnum.OUTLINE_INVERTED}>{`${t("read-more")}...`}</Button>
            <ViewEye className="item-block__eye" quantity={views} theme={ColorView.PrimaryDef} reverse={true}/>
          </div>
        </div>
        {(isLast && isEnd) && <DummyElement callback={toEndScroll} />}
      </div>
    )
  }

  return (
    <div className={ClassNames("article-virtualized", className)}>
      <List
        className="article-virtualized"
        width={1000}
        height={940}
        rowCount={ids.length}
        rowHeight={800}
        rowRenderer={rowRenderer}
      />
    </div>
  )
});

export {ArticleVirtualized}