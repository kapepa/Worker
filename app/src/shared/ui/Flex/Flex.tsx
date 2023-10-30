import {CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo} from "react";
import "./Flex.scss";
import {ClassNames} from "../../lib/ClassNames";

type justifyContentType = CSSProperties["justifyContent"];
type flexDirectionType = CSSProperties["flexDirection"];
type alignItemsType = CSSProperties["alignItems"];
interface FlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string,
  children: ReactNode,
  justifyContent?: justifyContentType,
  flexDirection?: flexDirectionType,
  alignItems?: alignItemsType,
  gap?: 0 | 8 | 16 | 24 | 32 | 40,
  max?: boolean
}
const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justifyContent,
    flexDirection,
    alignItems,
    gap,
    max,
    ...otherProps
  } = props;

  const setJustifyContent = useMemo(() => {
    switch (justifyContent){
      case "start":
        return "flex__justify-content--start";
      case "center":
        return "flex__justify-content--center";
      case "space-between":
        return "flex__justify-content--space-between";
      case "space-around":
        return "flex__justify-content--space-around";
      case "space-evenly":
        return "flex__justify-content--space-evenly";
      default:
        return undefined;
    }
  }, [justifyContent])

  const setFlexDirection = useMemo(() => {
    switch (flexDirection) {
      case "row":
        return "flex__flex-direction--row";
      case "row-reverse":
        return "flex__flex-direction--row-reverse";
      case "column":
        return "flex__flex-direction--column";
      case "column-reverse":
        return "flex__flex-direction--column-reverse";
      case "unset":
        return "flex__flex-direction--column-unset";
      default:
        return undefined;
    }
  }, [flexDirection]);

  const setAlignItems = useMemo(() => {
    switch (alignItems) {
      case "flex-start":
        return "flex__align-items__flex-start";
      case "flex-end":
        return "flex__align-items__flex-end";
      case "center":
        return "flex__align-items__center";
      case "stretch":
        return "flex__align-items__stretch";
      case "unset":
        return "flex__align-items__unset";
      case "baseline":
        return "flex__align-items__baseline";
      default:
        return undefined;
    }
  }, [alignItems]);

  const setGap = useMemo(() => {
    switch (gap){
      case 0:
        return "flex__gap--0";
      case 8:
        return "flex__gap--8";
      case 16:
        return "flex__gap--16";
      case 24:
        return "flex__gap--24";
      case 32:
        return "flex__gap--32";
      case 40:
        return "flex__gap--40";
      default:
        return undefined;
    }
  }, [gap]);

  const setMax = useMemo(() => {
    switch (max) {
      case true:
        return "flex__max"
      default:
        return undefined;
    }
  }, [max])

  return (
    <div
      className={
        ClassNames(
          "flex",
          className,
          setJustifyContent,
          setFlexDirection,
          setAlignItems,
          setGap,
          setMax,
        )
      }
      data-testid={"flex"}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export {Flex};