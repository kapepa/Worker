import {FC, ForwardedRef, memo} from "react";
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
  innerRef?: ForwardedRef<HTMLAnchorElement>
}

const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    innerRef,
    className = undefined,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      ref={innerRef}
      className={ClassNames(`AppLink`, theme, className)}
      data-testid="nav-link"
      {...otherProps}
    >{children}</NavLink>
  )
})

export default AppLink;