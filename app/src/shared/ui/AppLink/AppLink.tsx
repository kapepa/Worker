import {FC, ReactNode} from "react";
import "./AppLink.scss";
import {LinkProps, NavLink} from "react-router-dom";
import {ClassNames} from "../../lib/ClassNames";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  to: string,
  children: ReactNode,
  className?: string,
  theme?: AppLinkTheme,
}

const AppLink: FC<AppLinkProps> = ({to, children, theme = AppLinkTheme.PRIMARY,  className = undefined, ...otherProps}) => {
  return <NavLink className={ClassNames(`AppLink`, theme)} to={to} {...otherProps}>{children}</NavLink>
}

export default AppLink;