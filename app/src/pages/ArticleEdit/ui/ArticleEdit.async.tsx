import {lazy} from "react";

const ArticleEditAsync = lazy(() => import("./ArticleEdit").then(page => ({default: page.ArticleEdit})));

export {ArticleEditAsync};