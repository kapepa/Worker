import {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";
import {ClassNames} from "../../lib/ClassNames";

interface AppLinkProps {
  to: string,
  children: ReactNode,
  className?: string,
}

const AppLink: FC<AppLinkProps> = ({to, children}) => {
  return <NavLink className={ClassNames("")} to={to}>children</NavLink>
}

export default AppLink;