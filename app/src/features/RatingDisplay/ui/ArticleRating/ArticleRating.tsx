import {FC, memo, useCallback, useEffect, useState} from "react";
import {BasicRating} from "../BasicRating/BasicRating";
import {RatingCard, RatingTypeCard} from "../../../../entities/Rating";
import {useGetArticlesQuery, useUpdateArticlesMutation} from "../../api/rating.api";
import {useTranslation} from "react-i18next";

interface ArticleRatingProps {
  id: string,
}

const ArticleRating: FC<ArticleRatingProps> = memo(({id}) => {
  const { t } = useTranslation("rating");
  const [ ratingID, setRatingID ] = useState<string | undefined>(undefined);
  const { data, isLoading, isError,  } = useGetArticlesQuery(id);
  const [ updateArticle, result ] = useUpdateArticlesMutation();

  const sendChanges = useCallback( (data: RatingTypeCard) => {
    try {
      updateArticle(Object.assign(data, {id: ratingID}));
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [ratingID, updateArticle]);


  useEffect(() => {
    if(!!data?.id) setRatingID(data.id)
  }, [data?.id]);

  return (
    <BasicRating loading={isLoading} error={ isError ? t("error.article") : undefined} >
      <RatingCard isFill={data?.rate ?? 0} title={t("header.article")} callback={sendChanges} />
    </BasicRating>
  )
})

export {ArticleRating};