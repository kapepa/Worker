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
import {BgInputEnum} from "../../const/BgInput";
import {ColorInputEnum} from "../../const/ColorInputEnum";
import {CountryListType} from "../../const/CountryListType";

interface SelectProps {
  className?: string,
  prefix?: string,
  theme?: BgInputEnum,
  color?: ColorInputEnum,
  label?: string,
  selectList: CountryListType[],
  toTranslation: (str: string | undefined) => string,
  selected: (val: string) => void,
  defaultValue?: string,
  name: string,
  readOnly?: boolean,
}

const Select: FC<SelectProps> = (props: SelectProps) => {
  const { className, name, label, theme, color, selectList, toTranslation, selected, defaultValue, readOnly } = props;
  const [drop, setDrop] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onDrop = () => {if(!readOnly) setDrop(prev => !prev)};

  const onClickOption = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const select = target.dataset.select;
    inputRef.current!.value = toTranslation(select);
    if(!!select) selected(select);
  }, [toTranslation, selected])


  const dropList = useMemo(() => {
    return selectList.map((cou: CountryListType, index: number) => (
      <div key={`${cou.value}-${index}`} className="select__drop_arrow" onClick={onClickOption} data-select={cou.value}>{cou.text}</div>
    ))
  }, [selectList, onClickOption])

  useEffect(() => {
    if(inputRef.current) inputRef.current.value = defaultValue as string;
  }, [defaultValue])

  return (
    <div className={ClassNames("select", {"select--readonly": readOnly})} data-testid="select">
      <div className="select__frame" onClick={onDrop}>
        <div className={ClassNames("select__wrapper", {[`select__wrapper--${color}`]: !!color})}>
          { !!label && <label className="select__label" >{label}</label> }
          <input
            type="text"
            ref={inputRef}
            name={name}
            disabled={true}
            className={ClassNames("select__input", {[`select__input--${theme}`]: !!theme}, className)}
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