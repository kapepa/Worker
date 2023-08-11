import {ChangeEvent, FC, useMemo, useState, SelectHTMLAttributes, useRef, useEffect} from "react";
import "./Select.scss";
import {Countries} from "../../const/Countries";
import {useTranslation} from "react-i18next";
import {ClassNames} from "../../lib/ClassNames";

type CountryListType = { value: Countries, text: string };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string,
  prefix?: string,
}

const Select: FC<SelectProps> = ({ className, prefix, ...otherProps}) => {
  const { t } = useTranslation();
  const [select, setSelect] = useState<Countries>();
  const [drop, setDrop] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const country: CountryListType[] = [
    { value: Countries.USA, text: t(`country.${Countries.USA}`) },
    { value: Countries.RUS, text: t(`country.${Countries.RUS}`) },
    { value: Countries.BLR, text: t(`country.${Countries.BLR}`) },
    { value: Countries.UKR, text: t(`country.${Countries.UKR}`) },
    { value: Countries.MLD, text: t(`country.${Countries.MLD}`) },
    { value: Countries.BLG, text: t(`country.${Countries.BLG}`) },
    { value: Countries.HNG, text: t(`country.${Countries.HNG}`) },
  ];


  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target
    const val = target.value as Countries;
    inputRef.current!.value = t(`${prefix}.${val}`);
    setSelect(val);
  };

  const optionCountry = useMemo(() => {
    return country.map((opt: CountryListType, index: number) => (
      <option
        key={`${opt.value}-${index}`}
        value={opt.value}
      >{opt.text}</option>
    ))
  }, [country.length, t, select])

  const dropList = useMemo(() => {
    return country.map((cou: CountryListType, index: number) => (
      <div key={`${cou.value}-${index}`} data-country={cou.value}>{cou.text}</div>
    ))
  }, [])

  const onDrop = () => {
    console.log("accc")
    setDrop(pre => !pre);
  }

  useEffect(() => {
    if(inputRef.current) inputRef.current.value = t(`${prefix}.${otherProps.defaultValue}`);
  }, [inputRef.current, t(`${prefix}.${otherProps.defaultValue}`)])

  return (
    <div className="select">
      <div className="select__frame" onClick={onDrop}>
        <input className={ClassNames("select__input", className)} ref={inputRef} name={otherProps.name} type="text" disabled={true}/>
        <div className={ClassNames("select__drop", {"select__drop--open": drop})} >
          {dropList}
        </div>
      </div>
      <select className="select__select" onChange={onChange} name="country" {...otherProps}>
        {optionCountry}
      </select>
    </div>
  )
}

export {Select}