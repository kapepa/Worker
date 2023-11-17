import {FC, memo, useMemo} from "react";
import "./RatingStars.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import IcoImg from "../../../shared/ui/IcoImg/IcoImg";

interface RatingStarsProps {
  className?: string,
}

const RatingStars: FC<RatingStarsProps> = memo((props) => {
  const {className} = props;

  const StarFill = useMemo(() => {
    return <IcoImg ico={"StarIco"}/>
  }, [])

  return (
    <div className={ClassNames("rating-stars", className)}>
      {StarFill}
    </div>
  )
});

export {RatingStars};