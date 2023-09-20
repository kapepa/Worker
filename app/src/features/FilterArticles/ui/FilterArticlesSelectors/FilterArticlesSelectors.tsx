import {FC, memo, useCallback, useMemo} from "react";
import "./FilterArticlesSelectors.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Select} from "../../../../shared/ui/Select/Select";
import {useTranslation} from "react-i18next";
import {CountryListType} from "../../../../shared/types/CountryListType";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {useDispatch, useSelector} from "react-redux";
import {GetFilterArticles} from "../../selectors/getFilterArticles/getFilterArticles";
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {filterArticlesActions} from "../../model/slice/filterArticlesSlice";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {ArticlesActions} from "../../../../entities/Article";

interface FilterArticlesSelectorsProps {
  className?: string,
}
const FilterArticlesSelectors: FC<FilterArticlesSelectorsProps> = memo(({className}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation("filter");
  const { sort, order } = useSelector(GetFilterArticles);
  const { cleanArticles } = ArticlesActions;
  const { setOrderArticles, setSortArticles,  } = filterArticlesActions;

  const sortList: CountryListType<ArticleOrderField>[] = useMemo(() => {
    return [
      { text: t(`sort.${ArticleOrderField.CREATED}`), value: ArticleOrderField.CREATED },
      { text: t(`sort.${ArticleOrderField.TITLE}`), value: ArticleOrderField.TITLE },
      { text: t(`sort.${ArticleOrderField.VIEWS}`), value: ArticleOrderField.VIEWS },
    ]
  }, [t])

  const orderList: CountryListType<ArticleOrderSort>[] = useMemo(() => {
    return [
      { text: t(`order.${ArticleOrderSort.DESC}`), value: ArticleOrderSort.DESC },
      { text: t(`order.${ArticleOrderSort.ASC}`), value: ArticleOrderSort.ASC },
    ]
  }, [t])

  const onSort = useCallback((val: string) => {
    dispatch(setSortArticles(val));
    dispatch(cleanArticles())
  }, [dispatch, setSortArticles, cleanArticles])

  const onOrder = useCallback((val: string) => {
    dispatch(setOrderArticles(val));
    dispatch(cleanArticles())
  }, [dispatch, setOrderArticles, cleanArticles]);

  const toTranslationSort = useCallback((str: string | undefined) => t(`sort.${str}`), [t]);

  const toTranslationOrder = useCallback((str: string | undefined) => t(`order.${str}`), [t]);

  return (
    <div className={ClassNames("filter-selectors", className )}>
      <Select
        label={t(`type.sort`)}
        className="filter-selectors__select"
        defaultValue={toTranslationSort(sort)}
        selectList={sortList}
        name="sort"
        selected={onSort}
        toTranslation={toTranslationSort}
        theme={BgEnum.BG_COLOR_INVERTED}
      />

      <Select
        label={t(`type.order`)}
        className="filter-selectors__select"
        defaultValue={toTranslationOrder(order)}
        selectList={orderList}
        name="order"
        selected={onOrder}
        toTranslation={toTranslationOrder}
        theme={BgEnum.BG_COLOR_INVERTED}
      />
    </div>
  )
})

export {FilterArticlesSelectors}