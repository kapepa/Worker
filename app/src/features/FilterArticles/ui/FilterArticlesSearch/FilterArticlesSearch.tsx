import {ChangeEvent, FC, memo} from "react";
import "./FilterArticlesSearch.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Input} from "../../../../shared/ui/Input/Input";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {filterArticlesActions} from "../../model/slice/filterArticlesSlice";
import {FetchAllArticles} from "../../../../entities/Article/service/FetchAllArticles/FetchAllArticles";
import {ArticlesActions} from "../../../../entities/Article";
import {UseDebounce} from "../../../../shared/hooks/UseDebounce/UseDebounce";

interface FilterArticlesSearchProps {
  className?: string,
}
const FilterArticlesSearch: FC<FilterArticlesSearchProps> = memo(({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t} = useTranslation("filter");
  const { resetHasMore } = ArticlesActions;
  const { setSearchArticles } = filterArticlesActions;

  const onChange = UseDebounce((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    dispatch(resetHasMore());
    dispatch(setSearchArticles(target.value));
    dispatch(FetchAllArticles(true));
  }, 2500)

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