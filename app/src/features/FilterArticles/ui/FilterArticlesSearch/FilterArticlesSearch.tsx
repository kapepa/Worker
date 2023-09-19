import {FC, memo} from "react";
import "./FilterArticlesSearch.css";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface FilterArticlesSearchProps {
  className?: string,
}
const FilterArticlesSearch: FC<FilterArticlesSearchProps> = memo(({ className }) => {
  return (
    <div className={ClassNames("filter-search", className)}>
      FilterArticlesSearch
    </div>
  )
});

export {FilterArticlesSearch};