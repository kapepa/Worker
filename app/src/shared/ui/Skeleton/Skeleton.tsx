import {FC, HTMLAttributes} from "react";
import "./Skeleton.scss"
import {ClassNames} from "../../lib/ClassNames";
import {SkeletonShape} from "../../const/SkeletonShape";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement>{
  className?: string,
  shape: SkeletonShape,
}

const Skeleton: FC<SkeletonProps> = ({ className, shape, ...otherProps }) => {
  return (
    <div className={ClassNames("skeleton", `skeleton--${shape}`, className )} {...otherProps} data-testid="skeleton"/>
  )
}

export { Skeleton };