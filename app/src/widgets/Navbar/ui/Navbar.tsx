import {FC} from "react";
import "./Navbar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={ClassNames( "navbar", className)}>
      <div>
        <ThemeSwitcher/>
      </div>
      <nav className="navbar__nav">
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Home</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
      </nav>
    </div>
  )
}

export default Navbar;