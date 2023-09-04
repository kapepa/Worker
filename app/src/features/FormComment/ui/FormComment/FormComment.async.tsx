import {lazy} from "react";

const FormCommentAsync = lazy(() => import("./FormComment").then((m => ({default: m.FormComment}))));

export {FormCommentAsync}