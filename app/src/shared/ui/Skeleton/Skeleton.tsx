import {FC} from "react";
import "./Skeleton.scss"
import {ClassNames} from "../../lib/ClassNames";
import {SkeletonShape} from "../../const/SkeletonShape";

interface SkeletonProps {
  className?: string,
  shape: SkeletonShape,
}

const Skeleton: FC<SkeletonProps> = ({ className, shape }) => {
  return (
    <div className={ClassNames("skeleton", `skeleton--${shape}`, className )} data-testid="skeleton"/>
  )
}

export { Skeleton };