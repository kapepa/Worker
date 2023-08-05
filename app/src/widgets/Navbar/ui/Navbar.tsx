import {FC, memo} from "react";
import "./Navbar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import IcoImg, { IcoImgColor } from "../../../shared/ui/IcoImg/IcoImg";
import { UseSide } from "../../../app/contexts/Side";
import {RouterPath} from "../../../shared/const/Routers";
import {useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({className}) => {
  const { t } = useTranslation();
  const { profile } = useSelector(GetUsers);
  const { open } = UseSide();

  return (
    <div className={ClassNames("navbar", className)} data-testid="navbar">
      <nav className="navbar__nav">
        <AppLink
          className={ClassNames("navbar__link", {"navbar__link--squeeze": open})}
          theme={AppLinkTheme.SECONDARY} to={RouterPath.HOME}
          role="link"
        >
          <IcoImg className="navbar__ico" ico={"HomeIco"} color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
          <span className="navbar__symbol">{t("nav.home")}</span>
        </AppLink>
        <AppLink
          className={ClassNames("navbar__link", {"navbar__link--squeeze": open})}
          theme={AppLinkTheme.SECONDARY} to={RouterPath.ABOUT}
          role="link"
        >
          <IcoImg className="navbar__ico" ico={"AboutIco"} color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
          <span className="navbar__symbol">{t("nav.about")}</span>
        </AppLink>
        { !!profile && <AppLink
          className={ClassNames("navbar__link", {"navbar__link--squeeze": open})}
          theme={AppLinkTheme.SECONDARY} to={RouterPath.PROFILE}
          role="link"
        >
          <IcoImg className="navbar__ico" ico={"ProfileIco"} color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
          <span className="navbar__symbol">{t("nav.profile")}</span>
        </AppLink> }
      </nav>
    </div>
  )
});

export default Navbar;