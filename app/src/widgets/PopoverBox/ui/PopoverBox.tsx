import {FC, memo, ReactNode} from "react";
import "./PopoverBox.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Popover} from '@headlessui/react'

interface PopoverBoxProps {
  className?: string,
  classBtn?: string,
  innerBtn: ReactNode,
  // children: ReactNode,
}

const PopoverBox: FC<PopoverBoxProps> = memo((props) => {
  const {className, classBtn, innerBtn} = props;

  return (
    <div className={ClassNames("popover-box", className)}>
      <Popover className="relative">
        <Popover.Button className={ClassNames("popover-box__btn", classBtn)}>{innerBtn}</Popover.Button>
        <Popover.Panel className="absolute z-10">
          <div className="grid grid-cols-2">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
    </div>
  )
})

export {PopoverBox}