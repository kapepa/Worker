import {ChangeEvent, FC, memo, useCallback} from "react";
import "./FilterArticlesSearch.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Input} from "../../../../shared/ui/Input/Input";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {filterArticlesActions} from "../../model/slice/filterArticlesSlice";
import {ArticlesActions} from "../../../../entities/Article";

interface FilterArticlesSearchProps {
  className?: string,
}
const FilterArticlesSearch: FC<FilterArticlesSearchProps> = memo(({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t} = useTranslation("filter");
  const { cleanArticles } = ArticlesActions;
  const { setSearchArticles } = filterArticlesActions;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;
    dispatch(setSearchArticles(target.value));
    dispatch(cleanArticles());
  }, [dispatch, setSearchArticles, cleanArticles])

  return (
    <div className={ClassNames("filter-search", className)}>
      <Input
        onChange={onChange}
        theme={BgEnum.BG_COLOR_INVERTED}
        placeholder={t("type.keyword")}
      />
    </div>
  )
});

export {FilterArticlesSearch};