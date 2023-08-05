import {FC, memo} from "react";
import "./AppLink.scss";
import {LinkProps, NavLink} from "react-router-dom";
import {ClassNames} from "../../lib/ClassNames";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  to: string,
  className?: string,
  theme?: AppLinkTheme,
}

const AppLink: FC<AppLinkProps> = memo(({to, children, theme = AppLinkTheme.PRIMARY,  className = undefined, ...otherProps}) => {
  return <NavLink className={ClassNames(`AppLink`, theme, className)} to={to} {...otherProps} data-testid="nav-link">{children}</NavLink>
})

export default AppLink;