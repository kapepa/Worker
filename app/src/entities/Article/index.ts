import {ArticleBlocks} from "./model/types/articleType";
import {ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import {DetailsActions, DetailsReducers} from "./model/slice/detailsSlice";
import {FetchArticleById} from "./service/FetchArticleById/FetchArticleById";
import {GetArticleDetailsData} from "./selectors/GetArticleDetailsData/GetArticleDetailsData";

export {ArticleDetails, DetailsActions, DetailsReducers, FetchArticleById, GetArticleDetailsData};
export type {ArticleBlocks};