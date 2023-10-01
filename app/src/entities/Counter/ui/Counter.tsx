import {FC, MouseEvent} from "react";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {CounterActions} from "../model/slice/counterSlice";
import {GetCounterValue} from "../selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

interface CounterProps {
  className?: string,
}

const Counter: FC<CounterProps> = ({className}) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(GetCounterValue);
  const {t} = useTranslation();

  const onDecrease = (e: MouseEvent) => {
    dispatch(CounterActions.decrement())
  }

  const onIncrease = (e: MouseEvent) => {
    dispatch(CounterActions.increment())
  };

  return (
    <div className={ClassNames(className, "counter")}>
      <h3 data-testid="counter-value">{counterValue}</h3>
      <Button theme={ThemeButtonEnum.OUTLINE} data-testid="counter-decrease" onClick={onDecrease}>{t("decrease")}</Button>
      <Button theme={ThemeButtonEnum.OUTLINE} data-testid="counter-increase" onClick={onIncrease}>{t("increase")}</Button>
    </div>
  )
};

export {Counter};