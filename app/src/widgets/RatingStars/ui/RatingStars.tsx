import {FC, memo, useCallback, useEffect, useMemo, useState} from "react";
import "./RatingStars.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import IcoImg from "../../../shared/ui/IcoImg/IcoImg";
import {Flex} from "../../../shared/ui/Flex/Flex";

interface RatingStarsProps {
  stars?: number,
  className?: string,
  isFill?: number,
  countStars?: (count: number) => void,
}

const RatingStars: FC<RatingStarsProps> = memo((props) => {
  const {className, stars = 5, isFill = 0, countStars} = props;
  const [starsFill, setStarsFill] = useState<number>(isFill);

  const sendStars = useCallback((count: number) => {
    countStars?.(count);
  }, [countStars]);

  const selectStars = useCallback((positionStar: number) => {
    if(positionStar === starsFill){
      sendStars(0);
      // setStarsFill(0);
      return ;
    }
    sendStars(positionStar);
    // setStarsFill(positionStar);
  }, [sendStars, starsFill]);

  const BoxStars = useMemo(() => {
    return Array(stars)
      .fill(null)
      .map((_: null, index: number) => (
        <IcoImg
          key={`star-${index}`}
          className={ClassNames("rating-stars__unit", {"rating-stars__fill": index + 1 <= starsFill} )}
          ico={"StarIco"}
          onClick={() => selectStars(index + 1)}
        />
      ))
  }, [stars, starsFill, selectStars]);

  useEffect(() => {
    setStarsFill(isFill)
  }, [isFill]);

  return (
    <Flex
      className={ClassNames("rating-stars", className)}
      gap={0}
    >
      {BoxStars}
    </Flex>
  )
});

export {RatingStars};