import {FC, useCallback, useMemo} from "react";
import "./Country.scss";
import {Select} from "../../../shared/ui/Select/Select";
import {Countries} from "../../../shared/const/Countries";
import {CountryListType} from "../../../shared/const/CountryListType";
import {useTranslation} from "react-i18next";
import {BgInputEnum} from "../../../shared/const/BgInput";
import {ColorInputEnum} from "../../../shared/const/ColorInputEnum";

interface CountryProps {
  className?: string,
  defaultVal: Countries | string | undefined,
  selected: (val: Countries) => void,
  readOnly?: boolean,
}

const Country: FC<CountryProps> = ({ className, defaultVal, selected, readOnly }) => {
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

  return <Select
    name="country"
    selectList={country}
    readOnly={readOnly}
    className="country__input"
    defaultValue={toTranslation(defaultVal)}
    toTranslation={toTranslation}
    selected={useSelected}
    label={t(`login-form.label.country`)}
    theme={BgInputEnum.WHITE_BG}
    color={ColorInputEnum.WHITE_COLOR}
  />
}

export {Country}