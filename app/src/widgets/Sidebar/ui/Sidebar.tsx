import {FC, useState} from "react";
import "./Sidebar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../LangSwitcher";
import Button, { SizeButton, ThemeButtonEnum } from "../../../shared/ui/Button/Button";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(prev => !prev);

  return (
    <aside className={ClassNames(className, "sidebar", {"sidebar--open" : collapsed} )} data-testid="sidebar">
      <div className="sidebar__switchers">
        <ThemeSwitcher/>
        <LangSwitcher isShort={collapsed}/>
        <div className="sidebar__squeeze">
          <Button 
            onClick={onToggle} 
            role="toggle" 
            theme={ThemeButtonEnum.BACKGROUND_INVERTED}
            size={SizeButton.M}
            className="sidebar__toggle"
          >
            <div className={ClassNames("sidebar__angle", {"sidebar__angle--rotate": collapsed})} />
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;