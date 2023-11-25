import {FC, memo, Suspense} from "react";
import "./BasicRating.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface BasicRatingProps {
  className?: string,
}
const BasicRating: FC<BasicRatingProps> = memo((props) => {
  const {className} = props;

  return (
    <Suspense>
      <div className={ClassNames("basic-rating", className)}>
        BasicRating
      </div>
    </Suspense>
  )
})

export {BasicRating}