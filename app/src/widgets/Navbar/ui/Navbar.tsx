import {FC} from "react";
import "./Navbar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import IcoImg, { IcoImgColor } from "../../../shared/ui/IcoImg/IcoImg";
import { UseSide } from "../../../app/contexts/Side";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
  const { t } = useTranslation();
  const { open } = UseSide();

  return (
    <div data-testid="navbar" className={ClassNames("navbar", className)} >
      <nav className="navbar__nav">
        <AppLink className={ClassNames("navbar__link", {"navbar__link--squeeze": open})} theme={AppLinkTheme.SECONDARY} to='/'>
          <IcoImg className="navbar__ico" ico={"HomeIco"} color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
          <span className="navbar__symbol">{t("nav.home")}</span>
        </AppLink>
        <AppLink className={ClassNames("navbar__link", {"navbar__link--squeeze": open})} theme={AppLinkTheme.SECONDARY} to='/about'>
          <IcoImg className="navbar__ico" ico={"AboutIco"} color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
          <span className="navbar__symbol">{t("nav.about")}</span>
        </AppLink>
      </nav>
    </div>
  )
};

export default Navbar;