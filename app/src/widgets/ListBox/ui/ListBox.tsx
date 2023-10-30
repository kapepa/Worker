import {FC, memo, useCallback, useState} from "react";
import "./ListBox.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ListBoxInt} from "../../../shared/interface/ListBoxInt";
import {Listbox} from "@headlessui/react";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";
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

interface ListBoxProps {
  className?: string,
  list: ListBoxInt[],
  defaultValue: ListBoxInt,
  callback: (box: ListBoxInt) => void
}

const ListBox: FC<ListBoxProps> = memo((props: ListBoxProps) => {
  const {className, list, defaultValue, callback} = props;
  const [selectedBox, setSelectedBox] = useState<ListBoxInt>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
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

  const onChange = useCallback((box: ListBoxInt) => {
    setSelectedBox(box);
    callback(box);
  }, [callback]);

  return (
    <div className={ClassNames("list-box", className)} >
      <Listbox value={selectedBox} onChange={onChange}>
        <Listbox.Button
          className="list-box__btn"
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <Button theme={ThemeButtonEnum.BACKGROUND_INVERTED} fragment={false} >
            {selectedBox.name}
          </Button>
        </Listbox.Button>
        <FloatingFocusManager context={context} modal={false}>
          <Listbox.Options
            className="list-box__options"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {list.map((box: ListBoxInt, index: number) => (
              <Listbox.Option
                key={`${box.name}-${index}`}
                value={box}
                disabled={box.unavailable}
                className={ClassNames("list-box__option", { "list-box__option--active": box.name === selectedBox.name })}
              >
                {box.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </FloatingFocusManager>
      </Listbox>
    </div>
  )
});

export {ListBox};