import {FC, memo, useCallback, useMemo} from "react";
import "./Country.scss";
import {Select} from "../../../shared/ui/Select/Select";
import {Countries} from "../../../shared/const/Countries";
import {CountryListType} from "../../../shared/types/CountryListType";
import {useTranslation} from "react-i18next";
import {BgEnum} from "../../../shared/const/BgEnum";
import {ColorEnum} from "../../../shared/const/ColorEnum";
import {ClassNames} from "../../../shared/lib/ClassNames";

interface CountryProps {
  label?: string,
  className?: string,
  defaultVal: Countries | string | undefined,
  selected: (val: Countries) => void,
  readOnly?: boolean,
  color?: ColorEnum,
}

const Country: FC<CountryProps> = memo(({ className, defaultVal, selected, readOnly, label, color }) => {
  const { t } = useTranslation();
  const toTranslation = (str: string | undefined) => t(`country.${str}`);
  const useSelected = useCallback((val: string) => {
    selected(val as Countries);
  }, [selected])

  const country = useMemo<CountryListType[]>(() => {
    return [
      { value: Countries.USA, text: t(`country.${Countries.USA}`) },
      { value: Countries.RUS, text: t(`country.${Countries.RUS}`) },
      { value: Countries.BLR, text: t(`country.${Countries.BLR}`) },
      { value: Countries.UKR, text: t(`country.${Countries.UKR}`) },
      { value: Countries.MLD, text: t(`country.${Countries.MLD}`) },
      { value: Countries.BLG, text: t(`country.${Countries.BLG}`) },
      { value: Countries.HNG, text: t(`country.${Countries.HNG}`) },
    ];
  }, [t])

  return (
    <Select
      name="country"
      selectList={country}
      readOnly={readOnly}
      className={ClassNames("country__input", className)}
      defaultValue={toTranslation(defaultVal)}
      toTranslation={toTranslation}
      selected={useSelected}
      label={label}
      theme={BgEnum.BG_COLOR}
      color={color}
    />
  )
})

export {Country}