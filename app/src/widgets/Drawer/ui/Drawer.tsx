import {
  CSSProperties,
  FC,
  memo,
  ReactNode,
  useCallback,
  useMemo,
  useState,
  MouseEvent, useEffect,
  // AnimationEvent,
} from "react";
import "./Drawer.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {Flex} from "../../../shared/ui/Flex/Flex";
import PortalModal from "../../../shared/ui/PortalModal/PortalModal";
import { useDrag } from '@use-gesture/react'
import { a, useSpring, config } from '@react-spring/web'

const items = ['save item', 'open item', 'share item', 'delete item', 'cancel']
const height = items.length * 60 + 80

type flexDirectionType = CSSProperties["flexDirection"];
interface DrawerProps {
  className?: string,
  children: ReactNode,
  innerBtn?: ReactNode,
  onOpen?: () => void,
  onClose?: () => void,
  direction: flexDirectionType,
  isOpen?: boolean
}
const Drawer: FC<DrawerProps> = memo((props) => {
  const [float, setFloat] = useState<{open: boolean, view: boolean}>({open: false, view: false});
  const {
    className,
    children,
    direction,
    innerBtn,
    onOpen,
    onClose,
    isOpen,
  } = props;

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const open = useCallback(({ canceled }: any) => {
    setFloat({open: true, view: true});
    api.start({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff })
    if(!!onOpen) onOpen();
  }, [api, onOpen]);

  const close = useCallback((velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } })
    setFloat((prevState => ({...prevState, view: false, open: false})));
    if(onClose) onClose();
  }, [api, onClose]);

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      if (oy < -70) cancel()
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled })
      } else {
        api.start({ y: oy, immediate: true })
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  const hideDrawer = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLDivElement);
    if(target.classList.contains("drawer")) {
      close(0);
      setFloat((prevState => ({...prevState, view: false, open: false})));
    }
  }, [close]);

  const animationendDrawer = useCallback(() => {
    // if(float.open && !float.view) setFloat(prevState => ({open: false, view: false}));
    setFloat({open: false, view: false});
    close(0);
  }, [close])

  // const showDrawer = useCallback(() => {
  //   setFloat({open: true, view: true});
  //   if(!!onOpen) onOpen();
  // }, [onOpen])

  const viewDrawer = useMemo(() => {
    return (
      <div
        className={ClassNames("drawer", className)}
        onClick={hideDrawer}
      >
        <a.div className="drawer__sheet" {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 50}px)`, y }}>
          <Flex
            flexDirection={direction}
            alignItems="center"
            className={ClassNames("drawer__inner", { "drawer__inner--normal": float.view, "drawer__inner--reverse": !float.view})}
            // onAnimationEnd={animationendDrawer}
            onTouchEnd={animationendDrawer}
          >
            {children}
          </Flex>
        </a.div>
      </div>
    )
  }, [float.view, hideDrawer, children, direction, className, animationendDrawer, bind, display, y])

  const hasInnerBtn = useMemo(() => {
    return (
      <button
        className="drawer__btn"
        onClick={open}
      >
        {innerBtn}
      </button>
    )
  }, [open, innerBtn])

  useEffect(() => {
    if (!innerBtn) open({});
  }, [innerBtn, open, isOpen]);

  return (
    <>
      {!!innerBtn && hasInnerBtn}
      {float.open && <PortalModal>{viewDrawer}</PortalModal>}
    </>
  )
});

export {Drawer};