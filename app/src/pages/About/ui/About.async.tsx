import {lazy} from "react";

const AboutAsync = lazy(() => import("./About").then(module => ({default: module.About})));

export {AboutAsync};