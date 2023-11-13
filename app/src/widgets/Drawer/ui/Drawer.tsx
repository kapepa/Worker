import {CSSProperties, FC, memo, ReactNode, useCallback, useState} from "react";
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
  const [float, setFloat] = useState<boolean>(false);
  const {
    className,
    children,
    direction,
    innerBtn,
    onOpen
  } = props;

  const hideDrawer = useCallback(() => {
    setFloat(false);
  }, []);

  const showDrawer = useCallback(() => {
    if(!!onOpen)  onOpen();
    setFloat(true);
  }, [])

  return (
    <>
      <button
        className="drawer__btn"
        onClick={showDrawer}
      >
        {innerBtn}
      </button>
      <PortalModal>
        <div
          className={ClassNames("drawer", className)}
          onClick={hideDrawer}
        >
          <Flex
            flexDirection={direction}
            alignItems="center"
            className="drawer__inner"
          >
            {children}
          </Flex>
        </div>
      </PortalModal>
    </>
  )
});

export {Drawer};