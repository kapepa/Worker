import {FC, memo, useCallback, useMemo, useState} from "react";
import "./RatingStars.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import IcoImg from "../../../shared/ui/IcoImg/IcoImg";
import {Flex} from "../../../shared/ui/Flex/Flex";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface RatingStarsProps {
  className?: string,
  fill?: string
}

const RatingStars: FC<RatingStarsProps> = memo((props) => {
  const [starsFill, setStarsFill] = useState<number>(0)
  const {className} = props;

  const selectStars = useCallback((positionStar: number) => {
    setStarsFill(positionStar);
  }, [starsFill])

  const BoxStars = useMemo(() => {
    return Array(5)
      .fill(null)
      .map((_: null, index: number) => (
        <IcoImg
          key={`star-${index}`}
          className={ClassNames("rating-stars__unit", {"rating-stars__fill": index + 1 < starsFill + 1} )}
          ico={"StarIco"}
          onClick={() => selectStars(index + 1)}
        />
      ))
  }, [starsFill, selectStars])

  return (
    <Flex className="rating-stars" flexDirection={"column"} gap={16}>
      <Flex className={ClassNames("rating-stars", className)}>{BoxStars}</Flex>
      <Flex justifyContent="center" gap={16}>
        <Button theme={ThemeButtonEnum.OUTLINE_INVERTED}>asda</Button>
      </Flex>
    </Flex>
  )
});

export {RatingStars};