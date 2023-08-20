import {lazy} from "react";

const DetailsAsync = lazy(() => import("./Details").then(m => ({default: m.Details})));

export {DetailsAsync};