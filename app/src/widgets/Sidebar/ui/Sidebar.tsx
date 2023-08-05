import {FC, memo} from "react";
import "./Sidebar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import ThemeSwitcher from "../../../shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "../../LangSwitcher";
import Button, { SizeButton, ThemeButtonEnum } from "../../../shared/ui/Button/Button";
import Navbar from "../../Navbar";
import { UseSide } from "../../../app/contexts/Side";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = memo(({className}) => {
  const { open, toggleSide } = UseSide();
  const onToggle = () => toggleSide();

  return (
    <aside className={ClassNames(className, "sidebar", {"sidebar--open" : open} )} data-testid="sidebar">
      <Navbar className="sidebar__nav"/>
      <div className="sidebar__switchers">
        <ThemeSwitcher/>
        <LangSwitcher isShort={open}/>
        <div className="sidebar__squeeze">
          <Button 
            onClick={onToggle} 
            role="toggle" 
            theme={ThemeButtonEnum.BACKGROUND_INVERTED}
            size={SizeButton.M}
            className="sidebar__toggle"
          >
            <div className={ClassNames("sidebar__angle", {"sidebar__angle--rotate": open})} />
          </Button>
        </div>
      </div>
    </aside>
  )
})

export default Sidebar;