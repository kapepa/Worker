import {FC, memo, useCallback, useState} from "react";
import "./ListBox.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ListBoxInt} from "../../../shared/interface/ListBoxInt";
import {Listbox} from "@headlessui/react";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";
import {autoUpdate, flip, useFloating} from "@floating-ui/react";

interface ListBoxProps {
  className?: string,
  list: ListBoxInt[],
  defaultValue: ListBoxInt,
  callback: (box: ListBoxInt) => void
}

const ListBox: FC<ListBoxProps> = memo((props: ListBoxProps) => {
  const {className, list, defaultValue, callback} = props;
  const [selectedBox, setSelectedBox] = useState<ListBoxInt>(defaultValue);

  const onChange = useCallback((box: ListBoxInt) => {
    setSelectedBox(box);
    callback(box);
  }, [callback]);

  const {refs, floatingStyles} = useFloating({
    middleware: [flip()],
  });

  return (
    <div className={ClassNames("list-box", className)}>
      <Listbox value={selectedBox} onChange={onChange}>
        <Listbox.Button className="list-box__btn" ref={refs.setReference}>
          <Button theme={ThemeButtonEnum.BACKGROUND_INVERTED} fragment={false}>
            {selectedBox.name}
          </Button>
        </Listbox.Button>
        <Listbox.Options className="list-box__options" ref={refs.setFloating}>
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
      </Listbox>
    </div>
  )
});

export {ListBox};