import {FC, memo} from "react";
import "./ViewEye.scss";
import {ClassNames} from "../../lib/ClassNames";
import IcoImg, {IcoImgColor} from "../IcoImg/IcoImg";
import {ColorView} from "../../const/ColorView";

interface ViewEyeProps {
  className?: string,
  quantity: number,
  theme: ColorView,
}

const ViewEye: FC<ViewEyeProps> = memo(({className, quantity, theme}) => {

  const switchColor = (theme: ColorView) => {
    switch (theme) {
      case ColorView.PrimaryDef: return "view-eye--primary-def";
      case ColorView.PrimaryInv: return "view-eye--primary-inv";
      case ColorView.SecondaryDef: return "view-eye--secondary-def";
      case ColorView.SecondaryInv: return "view-eye--secondary-inv";
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
    <div className={ClassNames("view-eye", switchColor(theme), className)} data-testid="view-eye">
      <IcoImg className="view-eye__ico" ico={"EyeIco"} color={switchIco(theme)}/>
      <span className="view-eye__quantity">{quantity}</span>
    </div>
  )
})

export {ViewEye}