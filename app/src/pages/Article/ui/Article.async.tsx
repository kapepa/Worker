import {lazy} from "react";

const ArticleAsync = lazy(() => import("./Article").then(m => ({default: m.Article})));

export {ArticleAsync};