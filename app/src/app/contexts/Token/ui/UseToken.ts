import {TokenContext, TokenContextProps} from "../lib/TokenContext";
import {useContext} from "react";

const UseToken = (): TokenContextProps  => {
  const { logout } = useContext(TokenContext);

  return { logout };
}

export {UseToken}