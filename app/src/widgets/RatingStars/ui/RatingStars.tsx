import {FC, memo, useCallback, useMemo, useState} from "react";
import "./RatingStars.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import IcoImg from "../../../shared/ui/IcoImg/IcoImg";
import {Flex} from "../../../shared/ui/Flex/Flex";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface RatingStarsProps {
  className?: string,
  isFill?: number,
  countStars?: (count: number) => void,
}

const RatingStars: FC<RatingStarsProps> = memo((props) => {
  const {className, isFill = 0, countStars} = props;
  const [starsFill, setStarsFill] = useState<number>(isFill);

  const sendStars = useCallback((count: number) => {
    if(!!countStars) countStars(count);
  }, [countStars]);

  const selectStars = useCallback((positionStar: number) => {
    if(positionStar === starsFill){
      sendStars(0);
      setStarsFill(0);
      return ;
    }
    sendStars(positionStar);
    setStarsFill(positionStar);
  }, [starsFill, sendStars])

  const BoxStars = useMemo(() => {
    return Array(5)
      .fill(null)
      .map((_: null, index: number) => (
        <IcoImg
          key={`star-${index}`}
          className={ClassNames("rating-stars__unit", {"rating-stars__fill": index + 1 <= starsFill} )}
          ico={"StarIco"}
          onClick={() => selectStars(index + 1)}
        />
      ))
  }, [starsFill, selectStars])

  return (
    <Flex className="rating-stars" flexDirection={"column"} gap={16}>
      <Flex className={ClassNames("rating-stars__space", className)}>{BoxStars}</Flex>
      <Flex justifyContent="center" gap={16}>
        <Button theme={ThemeButtonEnum.OUTLINE_INVERTED}>asda</Button>
      </Flex>
    </Flex>
  )
});

export {RatingStars};