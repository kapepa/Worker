import {FC, memo, ReactNode, useCallback} from "react";
import "./Code.scss";
import {ClassNames} from "../../lib/ClassNames";
import IcoImg, {IcoImgColor} from "../IcoImg/IcoImg";
import Button from "../Button/Button";

interface CodeProps {
  className?: string,
  children: ReactNode,
  text: string,
}

const Code: FC<CodeProps> = memo(({className, children, text}) => {
  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={ClassNames("code", className)} data-testid="code">
      <Button className="code__copy" onClick={onCopy}>
        <IcoImg className="code__ico" ico={"CopyIco"} stroke={true} color={IcoImgColor.SECONDARY_COLOR}/>
      </Button>
      <code>
        {children}
      </code>
    </pre>
  )
})

export {Code};