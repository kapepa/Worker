import {FC, memo} from "react";
import {BasicRating} from "../BasicRating/BasicRating";
import {RatingCard} from "../../../../entities/Rating";

const ArticleRating: FC = memo(() => {

  return (
    <BasicRating loading={false} error={"asdas"}>
      <RatingCard />
    </BasicRating>
  )
})

export {ArticleRating};