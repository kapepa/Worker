import {lazy} from "react";

const ArticleCreateAsync = lazy(() => import("./ArticleCreate").then(page => ({default: page.ArticleCreate})));

export {ArticleCreateAsync};