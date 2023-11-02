import {lazy} from "react";

const AdminAsync = lazy(() => import("./Admin").then(m => ({ default: m.Admin } )));

export {AdminAsync};