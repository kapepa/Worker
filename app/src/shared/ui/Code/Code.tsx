import {FC, memo, ReactNode} from "react";
import "./Code.scss";
import {ClassNames} from "../../lib/ClassNames";
import IcoImg, {IcoImgColor} from "../IcoImg/IcoImg";
import Button from "../Button/Button";

interface CodeProps {
  className?: string,
  children: ReactNode,
}

const Code: FC<CodeProps> = memo(({className, children}) => {

  return (
    <pre className={ClassNames("code", className)}>
      <Button className="code__copy">
        <IcoImg className="code__ico" ico={"CopyIco"}  color={IcoImgColor.SECONDARY_COLOR}/>
      </Button>
      <code >
        {children}
      </code>
    </pre>
  )
})

export {Code};