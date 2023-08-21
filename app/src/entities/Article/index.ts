import {ArticleBlocks} from "./model/types/articleType";
import {ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import {DetailsActions, DetailsReducers} from "./model/slice/detailsSlice";
import {FetchArticleById} from "./service/FetchArticleById/FetchArticleById";

export {ArticleDetails, DetailsActions, DetailsReducers, FetchArticleById};
export type {ArticleBlocks};