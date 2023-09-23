import {FC, memo, useCallback, useMemo, MouseEvent} from "react";
import "./FilterArticlesTabs.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Tab} from "../../../../shared/ui/Tab/Tab";
import {ArticleTypesAdditionName, ArticleTypesTabs} from "../../../../shared/const/ArticleTypesTabs";
import {ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";
import {useTranslation} from "react-i18next";
import {ArticlesTabCell} from "../../model/interface/ArticlesTabCell";
import {filterArticlesActions} from "../../model/slice/filterArticlesSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {GetFilterArticlesTab} from "../../selectors/getFilterArticlesTab/getFilterArticlesTab";
import {ArticlesActions} from "../../../../entities/Article";
import {FetchAllArticles} from "../../../../entities/Article/service/FetchAllArticles/FetchAllArticles";

interface FilterArticlesTabsProps {
  className?: string,
}
const FilterArticlesTabs: FC<FilterArticlesTabsProps> = memo(({className}) => {
  const dispatch = useDispatch<AppDispatch>();
  const getTab = useSelector(GetFilterArticlesTab);
  const { t } = useTranslation("filter");
  const { resetHasMore } = ArticlesActions;
  const { setTabArticles } = filterArticlesActions;

  const tabList: ArticlesTabCell<ArticleTypesTabs>[] = useMemo<ArticlesTabCell<ArticleTypesTabs>[]>(
    () => [
      {value: ArticleTypesAdditionName.ALL, text: t(`tab.${ArticleTypesAdditionName.ALL}`)},
      {value: ArticleTypesKey.ECONOMICS, text: t(`tab.${ArticleTypesKey.ECONOMICS}`)},
      {value: ArticleTypesKey.SCIENCE, text: t(`tab.${ArticleTypesKey.SCIENCE}`)},
      {value: ArticleTypesKey.IT, text: t(`tab.${ArticleTypesKey.IT}`)},
    ],
    [t]
  );

  const onClickTab = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    const name = target.name as ArticleTypesTabs;
    dispatch(resetHasMore());
    dispatch(setTabArticles(name));
    dispatch(FetchAllArticles(true));
  }, [dispatch, resetHasMore, setTabArticles]);

  const preShowTabs = useMemo(() => tabList.map((tab: ArticlesTabCell<ArticleTypesTabs>, index: number) => (
    <Tab
      key={`${tab.value}-${index}`}
      isActive={getTab === tab.value}
      name={tab.value}
      onClick={onClickTab}
    >{tab.text}</Tab>
  )), [tabList, onClickTab, getTab]);

  return (
    <div className={ClassNames("filter-tabs", className)}>
      {preShowTabs}
    </div>
  )
})

export {FilterArticlesTabs}