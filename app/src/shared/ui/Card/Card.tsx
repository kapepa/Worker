import {FC, memo, ReactNode, useMemo} from "react";
import "./Card.scss";
import {ClassNames} from "../../lib/ClassNames";
import {BgEnum} from "../../const/BgEnum";

interface CardProps {
  className?: string,
  children: ReactNode
  theme: BgEnum
}

const Card: FC<CardProps> = memo(({ className, children, theme }) => {
  const themClass = useMemo(
    () => ({"card--bg-color": theme === BgEnum.BG_COLOR, "card--bg-color-inverted": theme === BgEnum.BG_COLOR_INVERTED}),
    [theme]
  )

  return (
    <div className={ClassNames("card", themClass,  className)}>
      {children}
    </div>
  )
})

export {Card}