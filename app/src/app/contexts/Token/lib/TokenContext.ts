import {createContext} from "react";

export interface TokenContextProps {
  logout: () => void,
}

export const TokenContext = createContext<TokenContextProps>({logout: () => {} });
export const LOCAL_STORAGE_TOKEN = "token";