import {FC} from "react";
import "./Sidebar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  return (
    <aside className={ClassNames(className)}>
      Sidebar
    </aside>
  )
}

export default Sidebar;