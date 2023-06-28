import {FC} from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import {ClassNames} from "../../../shared/lib/ClassNames";


interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={ClassNames( "navbar", className)}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </div>
  )
}

export default Navbar;