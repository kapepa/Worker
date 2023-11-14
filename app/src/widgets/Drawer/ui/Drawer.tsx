import {
  CSSProperties,
  FC,
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useState,
  MouseEvent,
  AnimationEvent,
} from "react";
import "./Drawer.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Flex} from "../../../shared/ui/Flex/Flex";
import PortalModal from "../../../shared/ui/PortalModal/PortalModal";

type flexDirectionType = CSSProperties["flexDirection"];
interface DrawerProps {
  className?: string,
  children: ReactNode,
  innerBtn: ReactNode,
  onOpen?: () => void,
  direction: flexDirectionType,
}
const Drawer: FC<DrawerProps> = memo((props) => {
  const [float, setFloat] = useState<{open: boolean, view: boolean}>({open: false, view: false});
  const {
    className,
    children,
    direction,
    innerBtn,
    onOpen
  } = props;

  const animationendDrawer = useCallback((e: AnimationEvent<HTMLDivElement>) => {
    if(float.open && !float.view) setFloat(prevState => ({open: false, view: false}));
  }, [float])

  const hideDrawer = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLDivElement);
    if(target.classList.contains("drawer")) setFloat((prevState => ({...prevState, view: false})));
  }, []);

  const showDrawer = useCallback(() => {
    setFloat({open: true, view: true});
    if(!!onOpen) onOpen();
  }, [onOpen])

  const viewDrawer = useMemo(() => {
    return (
      <div
        className={ClassNames("drawer", className)}
        onClick={hideDrawer}
      >
        <Flex
          flexDirection={direction}
          alignItems="center"
          className={ClassNames("drawer__inner", { "drawer__inner--normal": float.view, "drawer__inner--reverse": !float.view})}
          onAnimationEnd={animationendDrawer}
        >
          {children}
        </Flex>
      </div>
    )
  }, [float.view, hideDrawer, children, direction, className, animationendDrawer]);

  return (
    <>
      <button
        className="drawer__btn"
        onClick={showDrawer}
      >
        {innerBtn}
      </button>
      {float.open && <PortalModal>{viewDrawer}</PortalModal>}
    </>
  )
});

export {Drawer};