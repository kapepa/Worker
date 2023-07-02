import {FC, useState} from "react";
import "./Sidebar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../LangSwitcher";
import Button from "../../../shared/ui/Button/Button";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(prev => !prev);

  return (
    <aside className={ClassNames(className, "sidebar", {"sidebar--open" : collapsed} )} data-testid="sidebar">
      <Button onClick={onToggle}>Toggle</Button>
      <div className="sidebar__switchers">
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </aside>
  )
}

export default Sidebar;