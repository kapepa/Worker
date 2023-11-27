import {FC, memo} from "react";
import {BasicRating} from "../BasicRating/BasicRating";
import {RatingCard} from "../../../../entities/Rating";
import {useGetArticlesQuery} from "../../api/rating.api";

interface ArticleRatingProps {
  id: string,
}

const ArticleRating: FC<ArticleRatingProps> = memo(({id}) => {
  const { data, isLoading, isError } = useGetArticlesQuery(id);

  return (
    <BasicRating loading={isLoading} error={undefined}>
      <RatingCard isFill={data?.rate ?? 0} />
    </BasicRating>
  )
})

export {ArticleRating};