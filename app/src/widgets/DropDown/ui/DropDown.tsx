import {FC, ForwardedRef, forwardRef, memo, ReactNode, useState} from "react";
import "./DropDown.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Menu} from "@headlessui/react";
import {DropDownInt} from "../../../shared/interface/DropDownInt";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import Button from "../../../shared/ui/Button/Button";
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

interface DropDownProps {
  className?: string,
  navList: DropDownInt[],
  viewPrefix: ReactNode,
}

interface ForwardLinkLinkProps {
  href: string,
  children: ReactNode,
}

const DropDown: FC<DropDownProps> = memo((props: DropDownProps) => {
  const { className, navList, viewPrefix } = props;
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ]);

  const ForwardLink = forwardRef((props: ForwardLinkLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props;

    return (
      <AppLink to={href} innerRef={ref} className="drop-down__item"{...rest}>
        {children}
      </AppLink>
    )
  });

  return (
    <div className={ClassNames("drop-down", className )}>
      <Menu>
        <Menu.Button className="drop-down__view" ref={refs.setReference} {...getReferenceProps()}>
          {viewPrefix}
        </Menu.Button>
        <FloatingFocusManager context={context} modal={false}>
          <Menu.Items
            ref={refs.setFloating}
            className="drop-down__items"
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {navList.map((drop: DropDownInt, index: number): any => {
              switch (true) {
                case !!drop.href:
                  return <Menu.Item
                    key={`${drop.href}-${index}`}
                    as={ForwardLink}
                    href={drop.href ?? ""}
                    children={drop.label}
                  />;
                case !!drop.callback:
                  return <Menu.Item key={`${drop.href}-${index}`}>
                    {({ close }) => (
                      <div>
                        <Button onClick={() => {
                          if(drop.callback) drop!.callback(); close();
                        }} className="drop-down__item">
                          {drop.label}
                        </Button>
                      </div>
                    )}
                  </Menu.Item>
                default:
                  return <Menu.Item key={`${drop.href}-${index}`}/>
              }
            })}
          </Menu.Items>
        </FloatingFocusManager>
      </Menu>
    </div>
  )
});

export {DropDown}