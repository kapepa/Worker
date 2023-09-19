import {FC, memo, useCallback, useMemo} from "react";
import "./FilterArticlesSelectors.css";
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

interface FilterArticlesSelectorsProps {
  className?: string,
}
const FilterArticlesSelectors: FC<FilterArticlesSelectorsProps> = memo(({className}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation("filter");
  const { sort, order } = useSelector(GetFilterArticles);
  const { setOrderArticles, setSortArticles,  } = filterArticlesActions;

  const sortList: CountryListType[] = useMemo(() => {
    return [
      { text: t(`sort.${ArticleOrderField.CREATED}`), value: ArticleOrderField.CREATED },
      { text: t(`sort.${ArticleOrderField.TITLE}`), value: ArticleOrderField.TITLE },
      { text: t(`sort.${ArticleOrderField.VIEWS}`), value: ArticleOrderField.VIEWS },
    ]
  }, [t])

  const orderList = useMemo(() => {
    return [
      { text: t(`order.${ArticleOrderSort.DESC}`), value: ArticleOrderSort.DESC },
      { text: t(`order.${ArticleOrderSort.ASC}`), value: ArticleOrderSort.ASC },
    ]
  }, [t])

  const onSort = useCallback((val: string) => {
    dispatch(setSortArticles(val));
  }, [dispatch, setSortArticles])

  const onOrder = useCallback((val: string) => {
    dispatch(setOrderArticles(val));
  }, [dispatch, setOrderArticles]);

  const toTranslationSort = useCallback((str: string | undefined) => t(`sort.${str}`), [t]);

  const toTranslationOrder = useCallback((str: string | undefined) => t(`order.${str}`), [t]);

  return (
    <div className={ClassNames("filter-selectors", className )}>
      <Select
        defaultValue={toTranslationSort(sort)}
        selectList={sortList}
        name="sort"
        selected={onSort}
        toTranslation={toTranslationSort}
      />

      <Select
        defaultValue={toTranslationOrder(order)}
        selectList={orderList}
        name="order"
        selected={onOrder}
        toTranslation={toTranslationOrder}
      />
    </div>
  )
})

export {FilterArticlesSelectors}