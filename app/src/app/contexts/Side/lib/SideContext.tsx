import React from "react";

export interface SideInterface {
  open: boolean,
  toggleSide: () => void,
}

const side: SideInterface = {
  open: false,
  toggleSide: () => {},
};

const SideContext = React.createContext<SideInterface>(side);

export { SideContext };