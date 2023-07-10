import { useContext } from "react";
import { SideContext, SideInterface } from "../lib/SideContext";

const UseSide = () => useContext<SideInterface>(SideContext);

export default UseSide;