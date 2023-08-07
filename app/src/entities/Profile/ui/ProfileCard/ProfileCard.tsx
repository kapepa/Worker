import {FC, memo} from "react";
import "./ProfileCard.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {BgInputEnum, ColorInputEnum, Input} from "../../../../shared/ui/Input/Input";
import {useSelector} from "react-redux";
import {GetProfileData} from "../../selectors/GetProfileData/GetProfileData";

interface ProfileCardProps {
  className?: string,
}

const ProfileCard: FC<ProfileCardProps> = memo(({className}) => {
  const { t } = useTranslation("profile");
  const { firstname, lastname } = useSelector(GetProfileData);

  return (
    <div className={ClassNames("profile-card", className)} data-testid="profile-card">
      <div className="profile-card__top">
        <Text theme={TextTheme.PRIMARY} title={t("profile page")}/>
        <Button theme={ThemeButtonEnum.OUTLINE}>{t("edit")}</Button>
      </div>
      <div className="profile-card__basement">
        <Input
          label={"firstname"}
          theme={BgInputEnum.WHITE_BG}
          color={ColorInputEnum.WHITE_COLOR}
          defaultValue={firstname}
          placeholder={t("placeholder.firstname")}
          className="profile-card__input"
          type="text"
        />
        <Input
          label={"lastname"}
          theme={BgInputEnum.WHITE_BG}
          color={ColorInputEnum.WHITE_COLOR}
          defaultValue={lastname}
          placeholder={t("placeholder.lastname")}
          className="profile-card__input"
          type="text"
        />
      </div>
    </div>
  )
})

export {ProfileCard};