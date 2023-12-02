import {FC, memo, useCallback, useEffect, useState} from "react";
import {BasicRating} from "../BasicRating/BasicRating";
import {RatingCard, RatingTypeCard} from "../../../../entities/Rating";
import {useCreateRatingMutation, useGetArticlesQuery, useUpdateRatingMutation} from "../../api/rating.api";
import {useTranslation} from "react-i18next";

interface ArticleRatingProps {
  id: string | undefined,
}

const ArticleRating: FC<ArticleRatingProps> = memo(({id}) => {
  const { t } = useTranslation("rating");
  const [ ratingID, setRatingID ] = useState<string | undefined>(undefined);
  const { data, isLoading, isError } = useGetArticlesQuery(id, {skip: !id});
  const [ updateArticle ] = useUpdateRatingMutation();
  const [ createRating, result ] = useCreateRatingMutation();

  const sendChanges = useCallback( (data: RatingTypeCard) => {
    try {
      if(!!ratingID) updateArticle(Object.assign(data, {id: ratingID}));
      if(!ratingID && !!id) createRating({body: data, articlesID: id});
    } catch (e) {
      // handle error
      console.log(e);
    }
  }, [id, ratingID, updateArticle, createRating]);


  useEffect(() => {
    if(!!data?.id) setRatingID(data.id)
  }, [data?.id]);

  useEffect(() => {
    if(!!result.data) setRatingID(result.data!.id);
  }, [result.data]);

  return (
    <BasicRating loading={isLoading} error={ isError ? t("error.article") : undefined} >
      <RatingCard isFill={data?.rate ?? 0} title={t("header.article")} callback={sendChanges} />
    </BasicRating>
  )
})

export {ArticleRating};