import {lazy} from "react";

const ProfileAsync = lazy(() => import("./Profile").then(module => ({default: module.Profile})));

export {ProfileAsync}