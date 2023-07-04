import {FC} from "react";
import "./PageLoader.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import Loader from "../../../shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string,
}

const PageLoader: FC<PageLoaderProps> = ({className}) => {
  return (
    <div className={(ClassNames("page-loader", className ))} data-testid="page-loader">
      <Loader/>
    </div>
  )
}

export default PageLoader;