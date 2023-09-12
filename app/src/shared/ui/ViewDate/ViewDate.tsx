import {FC, memo} from "react";
import "./ViewDate.scss";
import {ColorView} from "../../const/ColorView";
import {ClassNames} from "../../lib/ClassNames";
import IcoImg, {IcoImgColor} from "../IcoImg/IcoImg";

interface ViewDateProps {
  className?: string,
  date: Date | string | undefined,
  theme: ColorView,
  showIco?: boolean
}

type typeDate = ViewDateProps["date"];

const ViewDate: FC<ViewDateProps> = memo(({className, date, theme, showIco = true}) => {

  const extractDate = (date: typeDate) => {
    if(typeof date === "string" || typeof date === "object"){
      const toDate = new Date(date);
      const appendZero = (digit: number) => digit > 9 ? digit : `0${digit}`;
      return `${appendZero(toDate.getDate())}.${appendZero(toDate.getMonth() + 1)}.${toDate.getFullYear()}`
    }
  }

  const switchColor = (theme: ColorView) => {
    switch (theme) {
      case ColorView.PrimaryDef: return "view-date--primary-def";
      case ColorView.PrimaryInv: return "view-date--primary-inv";
      case ColorView.SecondaryDef: return "view-date--secondary-def";
      case ColorView.SecondaryInv: return "view-date--secondary-inv";
      default: return "";
    }
  }

  const switchIco = (theme: ColorView) => {
    switch (theme) {
      case ColorView.PrimaryDef: return IcoImgColor.PRIMARY_COLOR;
      case ColorView.PrimaryInv: return IcoImgColor.PRIMARY_COLOR_INVERTED;
      case ColorView.SecondaryDef: return IcoImgColor.SECONDARY_COLOR;
      case ColorView.SecondaryInv: return IcoImgColor.SECONDARY_COLOR_INVERTED;
      default: return IcoImgColor.PRIMARY_COLOR;
    }
  }

  return (
    <div className={ClassNames("view-date", switchColor(theme), className)} data-testid="view-date">
      {!!showIco && <IcoImg className="view-date__ico" ico={"CalendarIco"} color={switchIco(theme)}/>}
      <span className="view-date__calendar">{extractDate(date)}</span>
    </div>
  )
})

export {ViewDate}