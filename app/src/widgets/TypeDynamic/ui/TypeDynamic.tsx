import {FC, memo, useCallback, useMemo, MouseEvent, useState, useEffect} from "react";
import "./TypeDynamic.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ArticleTypesKey} from "../../../entities/Article/model/types/articleType";
import {useTranslation} from "react-i18next";
import {TabListType} from "../type/TabListType";
import {Tab} from "../../../shared/ui/Tab/Tab";
import {ColorEnum} from "../../../shared/const/ColorEnum";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {useFormContext} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

type TabsState = {[key in ArticleTypesKey]: boolean};

type TabEntries = [ArticleTypesKey, boolean];
interface TypeDynamicProps {
  name: string,
  classLabel?: string,
  className?: string,
  classAlert?: string,
  label?: string,
  colorLabel?: ColorEnum,
  validation: RegisterOptions
}

const TypeDynamic: FC<TypeDynamicProps> = memo((props) => {
  const {t} = useTranslation("article");
  const {className, classLabel, classAlert, name, label, colorLabel, validation} = props;
  const {register, formState: { errors }, setValue, getValues, clearErrors } = useFormContext();
  const toHaveError = errors[name];

  const [tabs, setTabs] = useState<TabsState>(
    { [ArticleTypesKey.ECONOMICS] : false, [ArticleTypesKey.IT]: false, [ArticleTypesKey.SCIENCE]: false }
  )

  const typeList = useMemo<TabListType<ArticleTypesKey>[]>(() => {
    return [
      {value: ArticleTypesKey.IT, text: t(`type.${ArticleTypesKey.IT}`)},
      {value: ArticleTypesKey.SCIENCE, text: t(`type.${ArticleTypesKey.SCIENCE}`)},
      {value: ArticleTypesKey.ECONOMICS, text: t(`type.${ArticleTypesKey.ECONOMICS}`)},
    ]
  }, [t]);

  const clickTab = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const type: ArticleTypesKey = e.currentTarget.name as ArticleTypesKey;
    const setActive = {...tabs, [type]: !tabs[type]};
    const toArrayTabs: ArticleTypesKey[] = (Object.entries(setActive) as Array<TabEntries>).reduce((accum: ArticleTypesKey[], [val, bool]: TabEntries) => {
      if(bool) accum.push(val);
      return accum;
    }, []);

    setTabs(setActive);
    setValue(name, toArrayTabs);
  }, [name, tabs, setValue]);

  const translateError = useMemo(() => {
    if(name in errors){
      for(let key in validation) if(errors[name]?.type === key) {
        return {[name]: {...errors[name], message: validation[key].message}}
      }
    }
    return errors
  }, [validation, errors, name]);

  const tabTypes = useMemo(() => {
    return (
      typeList.map(( {value, text}: TabListType<ArticleTypesKey>, index: number ) => {
        return <Tab
          key={`${value}-${index}`}
          isActive={tabs[value]}
          children={text}
          onClick={clickTab}
          name={value}
          type="button"
        />
      })
    )
  }, [typeList, clickTab, tabs]);

  const setInitState = useCallback(() => {
    const types = getValues(name);
    if(!types) return;
    setTabs((prevState: TabsState) => {
      return types.reduce((accum: TabsState, tab: ArticleTypesKey) => {
        accum = {...accum, [tab]: true};
        return accum;
      }, prevState);
    })
  }, [name, getValues, setTabs])

  useEffect(() => {
    clearErrors(name)
  },[name, clearErrors])

  useEffect(() => {
    register(name, validation);
    setInitState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={ClassNames("type-dynamic", className)}>
      <div className="type-dynamic__base">
        {
          !!label &&<label
            className={ClassNames("type-dynamic__label", {[`type-dynamic__label--${colorLabel}`]: colorLabel}, classLabel)}
          >{label}</label>
        }
        <div className="type-dynamic__choose">
          {tabTypes}
        </div>
        { !!toHaveError &&
          <span className={ClassNames("input-dynamic__alert", classAlert)} data-testid="alert">
            <ErrorMessage errors={translateError} name={name} />
          </span>
        }
      </div>
    </div>
  )
})

export {TypeDynamic};