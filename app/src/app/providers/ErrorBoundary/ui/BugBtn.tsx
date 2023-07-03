import React, {FC, useEffect, useState} from "react";
import Button from "../../../../shared/ui/Button/Button";

const BugBtn: FC = () => {
  const [error, setError] = useState<boolean>(false);

  const onThrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    setError(prevState => !prevState);
  }

  useEffect(() => {
    if (error) throw new Error("Error");
  }, [error])

  return ( <Button onClick={onThrow}>BugBtnBoundary</Button>)
}

export default BugBtn;