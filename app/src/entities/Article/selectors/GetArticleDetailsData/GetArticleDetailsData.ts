import {createSelector} from "@reduxjs/toolkit";
import {GetArticleDetails} from "../GetArticleDetails/GetArticleDetails";
import {DetailsState} from "../../model/types/detailsState";

const GetArticleDetailsData = createSelector(
  GetArticleDetails,
  (state: DetailsState) => state.data,
);

export {GetArticleDetailsData}