import {
  FC,
  useMemo,
  useState,
  useRef,
  useEffect,
  MouseEvent,
  useCallback
} from "react";
import "./Select.scss";
import {ClassNames} from "../../lib/ClassNames";
import {BgEnum} from "../../const/BgEnum";
import {ColorEnum} from "../../const/ColorEnum";
import {SelectListType} from "../../types/SelectListType";

interface SelectProps <T>{
  className?: string,
  prefix?: string,
  theme?: BgEnum,
  color?: ColorEnum,
  label?: string,
  selectList: SelectListType<T>[],
  toTranslation: (str: string | undefined) => string,
  selected: (val: T) => void,
  defaultValue?: string,
  name: string,
  readOnly?: boolean,
};

const Select: FC<SelectProps<any>> = <T,>(props: SelectProps<T>) => {
// const Select =  function <T>(props: SelectProps<T>) {
  const { className, name, label, theme, color, selectList, toTranslation, selected, defaultValue, readOnly
  } = props;
  const [drop, setDrop] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onDrop = () => {
    if(!readOnly) setDrop(prev => !prev)
  };

  const onClickOption = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const select = target.dataset.select;
    inputRef.current!.value = toTranslation(select);
    if(!!select) selected(select as T);
  }, [toTranslation, selected])

  const dropList = useMemo(() => {
    return selectList.map((cou: SelectListType<T>, index: number) => (
      <div key={`${cou.value}-${index}`} className="select__drop_arrow" onClick={onClickOption} data-select={cou.value}>{cou.text}</div>
    ))
  }, [selectList, onClickOption])

  useEffect(() => {
    if(inputRef.current) inputRef.current.value = defaultValue as string;
  }, [defaultValue]);

  return (
    <div className={ClassNames("select")} data-testid="select">
      <div className="select__frame" onClick={onDrop}>
        <div className={ClassNames("select__wrapper", {[`select__wrapper--${color}`]: !!color})}>
          { !!label && <label className="select__label" >{label}</label> }
          <input
            type="text"
            ref={inputRef}
            name={name}
            className={ClassNames(
              "select__input",
              { [`select__input--${theme}`]: !!theme, "select__input--readonly": readOnly },
              className
            )}
          />
        </div>
        <div className={ClassNames("select__drop", {"select__drop--open": drop})} >
          {dropList}
        </div>
      </div>
    </div>
  )
}

export {Select}