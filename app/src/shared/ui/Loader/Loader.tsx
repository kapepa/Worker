import {FC} from "react";
import "./Loader.scss";
import {ClassNames} from "../../lib/ClassNames";

interface LoaderProps {
  className?: string,
}

const Loader: FC<LoaderProps> = ({className}) => {
  return (
    <div className={ClassNames("lds-ripple", className)} data-testid="loader">
      <div/><div/>
    </div>
  )
}

export default Loader;