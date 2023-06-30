import {FC, useState} from "react";
import "./Sidebar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../LangSwitcher";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(prev => !prev);

  return (
    <aside className={ClassNames(className, "sidebar", {"sidebar--open" : collapsed} )}>
      <button onClick={onToggle}>toggle</button>
      <div className="sidebar__switchers">
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </aside>
  )
}

export default Sidebar;