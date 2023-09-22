import {FC, memo, ButtonHTMLAttributes, ReactNode} from "react";
import "./Tab.scss";
import {ClassNames} from "../../lib/ClassNames";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  isActive?: boolean,
  children: ReactNode,
}

const Tab: FC<TabProps> = memo((props: TabProps) => {
  const {className, isActive = false, children, ...otherProps} = props;
  return (
    <button
      className={ClassNames("tab", { "tab--active": isActive }, className)}
      {...otherProps}
    >
      {children}
    </button>
  )
})

export {Tab};