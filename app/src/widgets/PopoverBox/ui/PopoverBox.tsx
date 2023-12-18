import {FC, memo, ReactNode, useState} from "react";
import "./PopoverBox.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Popover} from '@headlessui/react'
import {Flex} from "../../../shared/ui/Flex/Flex";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole
} from "@floating-ui/react";
import {offset} from "@floating-ui/dom";

interface PopoverBoxProps {
  className?: string,
  classBtn?: string,
  innerBtn: ReactNode,
  children: ReactNode,
  onOpen?:() => void,
}

const PopoverBox: FC<PopoverBoxProps> = memo((props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {className, classBtn, innerBtn, children, onOpen} = props;

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <div className={ClassNames("popover-box", className)}>
      <Popover className="relative">
        <Popover.Button
          className={ClassNames("popover-box__btn", classBtn)}
          ref={refs.setReference}
          {...getReferenceProps()}
          onClick={() => {if(!!onOpen) onOpen()}}
        >{innerBtn}</Popover.Button>
        <FloatingFocusManager context={context} modal={false}>
          <Popover.Panel
            className="popover-box__panel"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            { ({close}) =>
              (
                <Flex flexDirection="column" gap={16} onClick={() => close()}>
                  {children}
                </Flex>
              )
            }
          </Popover.Panel>
        </FloatingFocusManager>
      </Popover>
    </div>
  )
})

export {PopoverBox}